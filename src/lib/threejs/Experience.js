import * as THREE from 'three'

import Debug from './Utils/Debug.js'
import Sizes from './Utils/Sizes.js'
import Time from './Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'

import '@/styles/globals.css';
import Resources from './Utils/Resources.js'
import sources from './sources.js'


let instance = null;

class Experience {

    constructor(canvas, views) {
        
        if(instance) {
            return instance;
        }

        instance = this;

        // Setup
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.resources = new Resources(sources);

        this.scenes = [];

        const style = window.getComputedStyle(document.body);
        const bgColor = style.getPropertyValue('--background-color');

        for (let i = 0; i < views.length; i++) {
            const scene = new THREE.Scene();
            scene.background = new THREE.Color( bgColor);
            const view = views[ i ].current;
            scene.userData.view = view;

            const camera = new Camera(view)
            scene.add(camera.instance)
            scene.userData.camera = camera;

            const world = new World(scene, view.sceneInfo, this.resources, this.debug);
            scene.userData.world = world;

            this.scenes.push(scene);
        }

        this.renderer = new Renderer(canvas, this.sizes, bgColor);

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
    }

    resize()
    {
        for(let i = 0; i < this.scenes.length; i++) {
            const scene = this.scenes[i];
            scene.userData.camera.resize();
        }
        this.renderer.resize()
    }

    update()
    {
        this.renderer.clearForUpdate();
        for(let i = 0; i < this.scenes.length; i++) {
            const scene = this.scenes[i];
            scene.userData.camera.update();
            scene.userData.world.update(this.time.delta);
            this.renderer.update(scene)
        }
    }

    destroy()
    {
        this.sizes.off('resize')
        this.time.off('tick')

        // Traverse the whole scene
        for(let i = 0; i < this.scenes.length; i++) {
            const scene = this.scenes[i];
            scene.traverse((child) =>
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
            scene.userData.camera.controls.dispose()
        }
        this.renderer.instance.dispose()

        if(this.debug.active)
            this.debug.ui.destroy()
    }
}

export default Experience;