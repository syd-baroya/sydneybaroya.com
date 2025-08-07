// surf.vert / snow.vert (same for now)
precision highp float;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;
uniform vec3 cameraPosition;

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

varying vec3 vWorldPosition;
varying vec3 vNormal;

uniform float uTime;
uniform float uAmplitude;
uniform float uFrequency;
uniform float uPersistence;
uniform float uLacunarity;
uniform int uIterations;
uniform float uSpeed;

const int MAX_ITERATIONS = 10;

// Simplex 2D noise
//
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

float calculateElevation(vec2 position) {
  float total = 0.0;
  float f = uFrequency;
  float a = 1.0;

  for (int i = 0; i < MAX_ITERATIONS; i++) {
    if( i >= uIterations ) break;
    total += a * snoise(f * position + uSpeed * uTime);
    a *= uPersistence;
    f *= uLacunarity;
  }
  return uAmplitude * total;
}

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float elevation = calculateElevation(modelPosition.xz);
    modelPosition.y += elevation;
    
    float epsilon = 0.001;
    vec3 p = modelPosition.xyz;
    vec3 px = vec3(p.x + epsilon, calculateElevation(vec2(p.x + epsilon, p.z)), p.z);
    vec3 pz = vec3(p.x, calculateElevation(vec2(p.x, p.z + epsilon)), p.z + epsilon);
    vec3 tangent = normalize(px - p);
    vec3 bitangent = normalize(pz - p);
    vNormal = normalize(cross(tangent, bitangent));

    vWorldPosition = modelPosition.xyz;
    gl_Position = projectionMatrix * viewMatrix * modelPosition;
}
