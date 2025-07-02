import * as THREE from 'three'

export default class Floor
{
    constructor(resources)
    {
        this.initGeometry()
        this.initTextures(resources)
        this.initMaterial()
        this.initMesh()
    }

    initGeometry()
    {
        this.geometry = new THREE.CircleGeometry(5, 64)
    }

    initTextures(resources)
    {
        this.textures = {}

        this.textures.color = resources.items.grassColorTexture
        this.textures.color.colorSpace = THREE.SRGBColorSpace
        this.textures.color.repeat.set(1.5, 1.5)
        this.textures.color.wrapS = THREE.RepeatWrapping
        this.textures.color.wrapT = THREE.RepeatWrapping

        this.textures.normal = resources.items.grassNormalTexture
        this.textures.normal.repeat.set(1.5, 1.5)
        this.textures.normal.wrapS = THREE.RepeatWrapping
        this.textures.normal.wrapT = THREE.RepeatWrapping
    }

    initMaterial()
    {
        this.material = new THREE.MeshStandardMaterial({
            map: this.textures.color,
            normalMap: this.textures.normal
        })
    }

    initMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.rotation.x = - Math.PI * 0.5
        this.mesh.receiveShadow = true
    }

    update() {}
}