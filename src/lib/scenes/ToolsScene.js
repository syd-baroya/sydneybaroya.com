import * as THREE from 'three';
import Camera from '@/lib/threejs/Camera';
import Environment from '@/lib/threejs/models/Environment';
import Cube from '@/lib/threejs/models/Cube';

let scene, camera, cube, environment;
let sceneLoaded = false;

export function init(bgColor, view, resources) {
    scene = new THREE.Scene();
    scene.background = new THREE.Color( bgColor);

    scene.userData.view = view;
    camera = new Camera(view)
    camera.setPosition(7, 7, 15);
    scene.add(camera.instance)
    scene.userData.camera = camera;
    resources.on('ready', () =>
    {
        environment = new Environment(scene, resources);

        cube = new Cube();
        scene.add(cube.mesh);
        sceneLoaded = true;
    })
}

export function getScene() {
    return scene;
}

export function setBackgroundColor(bgColor) {
    scene.background.set(bgColor);
}

export function update(delta) {
    if(sceneLoaded) {
        scene.userData.camera.update();
        environment.update(delta);
        cube.update(delta);
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
    cube = null;
    environment = null;
}