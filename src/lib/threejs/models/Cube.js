import * as THREE from 'three'

export default class Cube
{
    constructor()
    {
        this.initGeometry()
        this.initMaterial()
        this.initMesh()
    }

    initGeometry()
    {
        this.geometry = new THREE.BoxGeometry(2, 2, 2);
    }

    initMaterial()
    {
        this.material = new THREE.MeshStandardMaterial({
            color: "#ffeded"
        })
    }

    initMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
    }

    update() {}
}