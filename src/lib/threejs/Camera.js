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
    }

    setPosition(x, y, z)
    {
        this.instance.position.set(x, y, z)
    }

    initControls()
    {
        this.controls = new OrbitControls(this.instance, this.div)
        this.controls.enableDamping = true
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = 0.5;
        if(this.windowIsMobile())
        {
            this.disableUserInteractions();
        }
    }

    enableUserInteractions() {
        this.controls.enablePan = true;
        this.controls.enableZoom = true;
        this.controls.enableRotate = true;
    }

    disableUserInteractions() {
        this.controls.enablePan = false;
        this.controls.enableZoom = false;
        this.controls.enableRotate = false;
    }

    resize()
    {
        const sizes = this.div.getBoundingClientRect();
        this.instance.aspect = sizes.width / sizes.height;
        this.instance.fov = this.fov / this.instance.aspect;
        this.instance.updateProjectionMatrix();

        if(this.windowIsMobile())
        {
            this.disableUserInteractions();
        } else {
            this.enableUserInteractions();
        }
    }

    update()
    {
        this.controls.update()
    }

    windowIsMobile()
    {
        return window.innerWidth < 640;
    }
}

export default Camera;