import * as THREE from 'three';

export default class Water extends THREE.Mesh {

    constructor(resources, options) {
        super();

        this.material = new THREE.RawShaderMaterial( {
            uniforms: {
                uSurfaceColor: { value: new THREE.Color(1, 0, 0) },
                uOpacity: { value: 0.5 },
                uTime: { value: 0.0 },
                uAmplitude: { value: 0.05 },
                uFrequency: { value: 1.5 },
                uPersistence:  { value: 0.3 },
                uLacunarity: { value: 2.0 },
                uIterations: { value: 2.0 },
                uSpeed: { value: 1.0 },
            },
            vertexShader: resources.items.waterShader.vert,
            fragmentShader: resources.items.waterShader.frag, 
            transparent: true,
        })

        this.geometry = new THREE.PlaneGeometry(5, 5, options.resolution, options.resolution);
        this.rotation.x = - Math.PI / 2;
    }

    update(time) {
        this.material.uniforms.uTime.value = time.elapsed;
    }

    addToDebug(debug){
        const waterFolder = debug.ui.addFolder('water');
        const wavesFolder = waterFolder.addFolder('waves');

        waterFolder.addColor(this.material.uniforms.uSurfaceColor, 'value').name('Color');
        waterFolder.add(this.material.uniforms.uOpacity, 'value').name('Opacity').min(0).max(1).step(0.01);
        
        wavesFolder.add(this.material.uniforms.uAmplitude, 'value').name('Amplitude').min(0).max(1).step(0.01);
        wavesFolder.add(this.material.uniforms.uFrequency, 'value').name('Frequency').min(0).max(10).step(0.01);        
        wavesFolder.add(this.material.uniforms.uPersistence, 'value').name('Persistence').min(0).max(1).step(0.01);
        wavesFolder.add(this.material.uniforms.uLacunarity, 'value').name('Lacunarity').min(0).max(10).step(0.01);
        wavesFolder.add(this.material.uniforms.uIterations, 'value').name('Iterations').min(0).max(10).step(1);
        wavesFolder.add(this.material.uniforms.uSpeed, 'value').name('Speed').min(0).max(10).step(0.01);
    }
}