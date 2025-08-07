import * as THREE from 'three'

export default class Summer
{
    constructor(resources)
    {
        // Resource
        this.resource = resources.items.summerModel;
        this.bakedTexture = resources.items.summerBakedTexture;
        this.bakedTexture.flipY = false;
        this.bakedTexture.colorSpace = THREE.SRGBColorSpace;

        this.initModel();

    }

    initModel()
    {
        this.model = this.resource.scene

        const bakedMaterial = new THREE.MeshBasicMaterial({ map: this.bakedTexture })
        
        this.model.traverse((child) =>
        {
            child.material = bakedMaterial
        })
        this.model.position.y -= .8;
    }

    update() {}

    addToDebug(debug) {
        const debugFolder = debug.ui.addFolder('summer');
    }
}