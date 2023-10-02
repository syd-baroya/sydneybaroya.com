import * as THREE from 'three'
import Experience from './Experience.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

class Camera
{
    constructor(canvas)
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene

        this.setInstance()
        this.setControls(canvas)
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.set(6, 4, 8)
        this.scene.add(this.instance)
    }

    setControls(canvas)
    {
        this.controls = new OrbitControls(this.instance, canvas)
        this.controls.enableDamping = true
        this.controls.enablePan = false;
        this.controls.enableZoom = false;

        this.controls.maxAzimuthAngle = Math.PI / 4;
        this.controls.minAzimuthAngle = -Math.PI / 4;
        this.controls.maxPolarAngle = Math.PI / 2;
        this.controls.minPolarAngle = 0;

    }



    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        this.controls.update()
    }
}

export default Camera;