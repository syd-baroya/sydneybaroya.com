#ifdef GL_ES
precision mediump float;
#endif

uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    float noise = fract(sin(dot(uv * 100.0, vec2(12.9898,78.233))) * 43758.5453);
    float sparkle = step(0.995, noise + sin(uTime * 2.0) * 0.005);
    vec3 color = mix(vec3(0.9, 0.9, 1.0), vec3(1.0), sparkle);
    gl_FragColor = vec4(color, 1.0);
}
