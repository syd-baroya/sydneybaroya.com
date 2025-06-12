import * as THREE from 'three'

import Debug from './Utils/Debug.js'
import Sizes from './Utils/Sizes.js'
import Time from './Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
import Resources from './Utils/Resources.js'

import sources from './sources.js'
import '../style.css';
 


class Experience {

    constructor(container, view) {


        // Setup
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.resources = new Resources(sources)

        // this.scenes = [];

        this.init(view);


        this.renderer = new Renderer(container)

        // this.camera.disableControls();

        // Resize event
        this.sizes.on('resize', () =>
        {
            this.resize()
        })

        // Time tick event
        this.time.on('tick', () =>
        {
            this.update()
        })

        //render restre event
        this.renderer.on('restore', () =>
        {
            this.init();
            this.update()
        })
    }

    init(view) {
        const style = window.getComputedStyle(document.body);
        const bgColor = style.getPropertyValue('--background-color');

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( bgColor);
        this.scene.userData.view = view;

        const camera = new Camera(view)
        this.scene.add(camera.instance)
        this.scene.userData.camera = camera;

        const world = new World(this.scene, view.sceneInfo)
        this.scene.userData.world = world;

    }

    resize()
    {
        this.scene.userData.camera.resize();
        this.renderer.resize()
    }

    update()
    {
        this.renderer.clearForUpdate();
        this.scene.userData.camera.update();
        this.scene.userData.world.update();
        this.renderer.update(this.scene)

    }

    destroy()
    {
        this.sizes.off('resize')
        this.time.off('tick')

        // Traverse the whole scene
        
        this.scene.traverse((child) =>
        {
            // Test if it's a mesh
            if(child instanceof THREE.Mesh)
            {
                child.geometry.dispose()

                // Loop through the material properties
                for(const key in child.material)
                {
                    const value = child.material[key]

                    // Test if there is a dispose function
                    if(value && typeof value.dispose === 'function')
                    {
                        value.dispose()
                    }
                }
            }
        })
        this.scene.userData.camera.controls.dispose()
        this.renderer.instance.dispose()

        if(this.debug.active)
            this.debug.ui.destroy()
    }
}

export default Experience;