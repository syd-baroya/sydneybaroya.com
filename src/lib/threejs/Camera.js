import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

class Camera
{
    constructor(div)
    {
        this.div = div
        this.initInstance()
        this.initControls()
    }

    initInstance()
    {
        const sizes = this.div.getBoundingClientRect()
        this.fov = 35;
        const aspect = sizes.width / sizes.height;
        this.instance = new THREE.PerspectiveCamera(this.fov/aspect, aspect, 0.1, 100)
        this.instance.position.set(7, 7, 7)
    }

    initControls()
    {
        this.controls = new OrbitControls(this.instance, this.div)
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
        const sizes = this.div.getBoundingClientRect();
        this.instance.aspect = sizes.width / sizes.height;
        this.instance.fov = this.fov / this.instance.aspect;
        this.instance.updateProjectionMatrix();
    }

    update()
    {
        this.controls.update()
    }
}

export default Camera;