precision highp float;

uniform vec3 uSurfaceColor;
uniform float uOpacity;
varying vec2 vUv;

void main() {
    gl_FragColor = vec4(uSurfaceColor, uOpacity);
}

// precision mediump float;
// uniform vec3 uColor;

// varying vec2 vUv;
// varying float vElevation;

// void main()
// {
//     // vec4 textureColor = texture2D(uTexture, vUv);
//     // textureColor.rgb *= vElevation * 2.0 + 0.65;
//     // gl_FragColor = textureColor;
//     gl_FragColor = vec4(vUv, 1.0, 1.0);
// }
