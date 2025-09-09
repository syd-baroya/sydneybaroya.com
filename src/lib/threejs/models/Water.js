import * as THREE from 'three';

export default class Water extends THREE.Mesh {

    constructor(resources, options) {
        super();

        this.material = new THREE.RawShaderMaterial( {
            uniforms: {

                uTime: { value: 0.0 },
                uEnvironmentMap: { value: resources.items.sunsetCubeMap },
                uOpacity: { value: 0.8 },

                uTroughColor: { value: new THREE.Color('#54a5b0') }, //#186691
                uSurfaceColor: { value: new THREE.Color('#9bd8c0') },
                uPeakColor: { value: new THREE.Color('#bbd8e0') },


                uAmplitude: { value: 0.04 },
                uFrequency: { value: .84 },
                uPersistence:  { value: 0.19 },
                uLacunarity: { value: 2.93 },
                uIterations: { value: 6 },
                uSpeed: { value: 0.58 },

                uTroughThreshold: { value: -0.05 },
                uTroughTransition: { value: 0.1 },
                uPeakThreshold: { value: 0.05 },
                uPeakTransition: { value: 0.1 },

                uFresnelStrength: { value: 0.67 },
                uFresnelPower: { value: 1.2 },
            },
            vertexShader: resources.items.waterShader.vert,
            fragmentShader: resources.items.waterShader.frag, 
            transparent: true,
        })

        this.geometry = new THREE.PlaneGeometry(8, 8, options.resolution, options.resolution);
        this.rotation.x = - Math.PI / 2;
    }

    update(time) {
        this.material.uniforms.uTime.value = time.elapsed;
    }

    addToDebug(debug){
        const waterFolder = debug.ui.addFolder('water');
        const wavesFolder = waterFolder.addFolder('waves');
        const colorFolder = waterFolder.addFolder('color');
        const fresnelFolder = waterFolder.addFolder('fresnel');

        colorFolder.addColor(this.material.uniforms.uSurfaceColor, 'value').name('Surface Color');
        colorFolder.add(this.material.uniforms.uOpacity, 'value').name('Opacity').min(0).max(1).step(0.01);
        colorFolder.addColor(this.material.uniforms.uTroughColor, 'value').name('Trough Color');
        colorFolder.addColor(this.material.uniforms.uPeakColor, 'value').name('Peak Color');
        colorFolder.add(this.material.uniforms.uTroughThreshold, 'value').name('Trough Threshold').min(-1).max(1).step(0.01);
        colorFolder.add(this.material.uniforms.uTroughTransition, 'value').name('Trough Transition').min(0).max(1).step(0.01);
        colorFolder.add(this.material.uniforms.uPeakThreshold, 'value').name('Peak Threshold').min(-1).max(1).step(0.01);
        colorFolder.add(this.material.uniforms.uPeakTransition, 'value').name('Peak Transition').min(0).max(1).step(0.01);


        wavesFolder.add(this.material.uniforms.uAmplitude, 'value').name('Amplitude').min(0).max(1).step(0.01);
        wavesFolder.add(this.material.uniforms.uFrequency, 'value').name('Frequency').min(0).max(10).step(0.01);        
        wavesFolder.add(this.material.uniforms.uPersistence, 'value').name('Persistence').min(0).max(1).step(0.01);
        wavesFolder.add(this.material.uniforms.uLacunarity, 'value').name('Lacunarity').min(0).max(10).step(0.01);
        wavesFolder.add(this.material.uniforms.uIterations, 'value').name('Iterations').min(0).max(10).step(1);
        wavesFolder.add(this.material.uniforms.uSpeed, 'value').name('Speed').min(0).max(10).step(0.01);

        fresnelFolder.add(this.material.uniforms.uFresnelStrength, 'value').name('Fresnel Strength').min(0).max(1).step(0.01);
        fresnelFolder.add(this.material.uniforms.uFresnelPower, 'value').name('Fresnel Power').min(0).max(10).step(0.01);
    }
}