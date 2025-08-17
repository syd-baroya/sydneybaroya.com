import * as THREE from 'three';
import Camera from '@/lib/threejs/Camera';
import Environment from '@/lib/threejs/models/Environment';
import Otter from '@/lib/threejs/models/Otter';
import Debug from '@/lib/threejs/utils/Debug';

let scene, camera, otter, environment, debug;
// let floor;
let sceneLoaded = false;
export function init(bgColor, view) {
    scene = new THREE.Scene();
    scene.background = new THREE.Color( bgColor);

    scene.userData.view = view;
    camera = new Camera(view)
    camera.setPosition(7, 10, 7);
    camera.controls.enableZoom = false;
    scene.add(camera.instance)
    scene.userData.camera = camera;

    debug = new Debug(document.getElementById('homeSceneGUI'), false);
}

export function loadScene(resources) {
    environment = new Environment(scene, resources);

    otter = new Otter(resources);
    otter.setScale(1.4);
    otter.play('paddle');
    scene.add(otter.model);
    
    sceneLoaded = true;
}

export function getScene() {
    return scene;
}

export function addToDebug() {
    if(debug.active) {
        environment.addToDebug(debug);
        otter.addToDebug(debug);
    }
}

export function setBackgroundColor(bgColor) {
    scene.background.set(bgColor);
}

export function mouseMove(position) {
    if(sceneLoaded) {
        otter.mouseMove(position, scene.userData.camera.instance);
    }
    
}

export function update(time) {
    if(sceneLoaded) {
        scene.userData.camera.update();
        otter.update(time.delta);
        environment.update(time.delta);
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
    if(debug.active) debug.ui.destroy();
    debug = null;
    sceneLoaded = false;
    scene = null;
    camera = null;
    otter = null;
    environment = null;
}