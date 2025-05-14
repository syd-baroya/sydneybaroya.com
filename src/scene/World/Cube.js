import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Cube
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

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
}