import * as THREE from 'three';
import Camera from '@/lib/threejs/Camera';
import Environment from '@/lib/threejs/models/Environment';
import Fox from '@/lib/threejs/models/Fox';
import Floor from '@/lib/threejs/models/Floor'
import Summer from '@/lib/threejs/models/Summer';

let scene, camera, summer, environment;
let sceneLoaded = false;
export function init(bgColor, view, resources) {
    scene = new THREE.Scene();
    scene.background = new THREE.Color( bgColor);

    scene.userData.view = view;
    camera = new Camera(view)
    scene.add(camera.instance)
    scene.userData.camera = camera;
    resources.on('ready', () =>
    {
        // environment = new Environment(scene, resources);

        // fox = new Fox( resources);
        // scene.add(fox.model);

        // floor = new Floor(resources);
        // scene.add(floor.mesh);

        summer = new Summer(resources);
        scene.add(summer.model);
        sceneLoaded = true;
    })
}

export function getScene() {
    return scene;
}

export function addToDebug(debug) {
    // environment.addToDebug(debug);
    // fox.addToDebug(debug);
}

export function setBackgroundColor(bgColor) {
    scene.background.set(bgColor);
}

export function update(delta) {
    if(sceneLoaded) {
        scene.userData.camera.update();
        summer.update(delta);
        // environment.update(delta);
        // fox.update(delta);
        // floor.update(delta);
    }
}

export function resize() {
    scene.userData.camera.resize();
}

export function destroy() {
    scene.traverse((child) => {
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

    scene.userData.camera.controls.dispose();
    sceneLoaded = false;
    scene = null;
    camera = null;
    summer = null;
    // fox = null;
    // floor = null;
    // environment = null;
}