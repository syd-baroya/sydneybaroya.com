precision highp float;

uniform vec3 cameraPosition;

uniform float uOpacity;

uniform samplerCube uEnvironmentMap;
uniform vec3 uTroughColor;
uniform vec3 uSurfaceColor;
uniform vec3 uPeakColor;

uniform float uTroughThreshold;
uniform float uTroughTransition;
uniform float uPeakThreshold;
uniform float uPeakTransition;

uniform float uFresnelStrength;
uniform float uFresnelPower;

varying vec3 vWorldPosition;
varying vec3 vNormal;

void main() {
    vec3 viewDirection = normalize(vWorldPosition - cameraPosition);
    vec3 reflectedLight = reflect(viewDirection, vNormal);
    reflectedLight.x *= -1.0;
    
    vec4 reflectionColor = textureCube(uEnvironmentMap, reflectedLight);

    float fresnel = uFresnelStrength * pow(1.0 - clamp(dot(viewDirection, vNormal), 0.0, 1.0), uFresnelPower);

    float trough2surface = smoothstep(
        uTroughThreshold - uTroughTransition,
        uTroughThreshold + uTroughTransition,
        vWorldPosition.y
    );
    float surface2peak = smoothstep(
        uPeakThreshold - uPeakTransition,
        uPeakThreshold + uPeakTransition,
        vWorldPosition.y
    );

    vec3 mixedColor1 = mix(uTroughColor, uSurfaceColor, trough2surface);
    vec3 mixedColor2 = mix(mixedColor1, uPeakColor, surface2peak);

    vec3 finalColor = mix(mixedColor2, reflectionColor.rgb, fresnel);
    gl_FragColor = vec4(finalColor, uOpacity);
}
