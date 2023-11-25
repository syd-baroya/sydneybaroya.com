import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Summer
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.debug = this.experience.debug

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('summer');
        }

        // Resource
        this.resource = this.resources.items.summerModel;
        this.bakedTexture = this.resources.items.summerBakedTexture;
        this.bakedTexture.flipY = false;
        this.bakedTexture.colorSpace = THREE.SRGBColorSpace;

        this.setModel();

    }

    setModel()
    {
        this.model = this.resource.scene

        const bakedMaterial = new THREE.MeshBasicMaterial({ map: this.bakedTexture })
        
        this.model.traverse((child) =>
        {
            child.material = bakedMaterial
        })

        this.model.position.y -= .8;
        this.scene.add(this.model)

    }
}