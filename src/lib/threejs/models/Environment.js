import * as THREE from 'three'

class Environment
{
    constructor(scene, resources)
    {
        this.scene = scene
        
        this.initSunLight()
        this.initEnvironmentMap(resources)
    }

    addToDebug(debug) {
        let debugFolder =debug.ui.addFolder('environment')
        debugFolder
            .add(this.sunLight, 'intensity')
            .name('sunLightIntensity')
            .min(0)
            .max(10)
            .step(0.001)
        
        debugFolder
            .add(this.sunLight.position, 'x')
            .name('sunLightX')
            .min(- 5)
            .max(5)
            .step(0.001)
        
        debugFolder
            .add(this.sunLight.position, 'y')
            .name('sunLightY')
            .min(- 5)
            .max(5)
            .step(0.001)
        
        debugFolder
            .add(this.sunLight.position, 'z')
            .name('sunLightZ')
            .min(- 5)
            .max(5)
            .step(0.001)

        debugFolder
            .add(this.environmentMap, 'intensity')
            .name('envMapIntensity')
            .min(0)
            .max(4)
            .step(0.001)
            .onChange(this.environmentMap.updateMaterials)
    }

    initSunLight()
    {
        this.sunLight = new THREE.DirectionalLight('#ffffff', 4)
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 15
        this.sunLight.shadow.mapSize.set(1024, 1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(3.5, 2, - 1.25)
        this.scene.add(this.sunLight)
    }

    initEnvironmentMap(resources)
    {
        this.environmentMap = {}
        this.environmentMap.intensity = 0.4
        this.environmentMap.texture = resources.items.environmentMapTexture
        this.environmentMap.texture.colorSpace = THREE.SRGBColorSpace
        
        this.scene.environment = this.environmentMap.texture

        this.environmentMap.updateMaterials = () =>
        {
            this.scene.traverse((child) =>
            {
                if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial)
                {
                    child.material.envMap = this.environmentMap.texture
                    child.material.envMapIntensity = this.environmentMap.intensity
                    child.material.needsUpdate = true
                }
            })
        }
        this.environmentMap.updateMaterials()

    }

    update() {}
}

export default Environment;