import * as THREE from 'three';
import Camera from '@/lib/threejs/Camera';
import Environment from '@/lib/threejs/models/Environment';
import Water from '@/lib/threejs/models/Water';
import Debug from '@/lib/threejs/utils/Debug';
import Otter from '@/lib/threejs/models/Otter';

let scene, camera, environment, debug, water, otter;
// let fox;
let sceneLoaded = false;

export function init(bgColor, view, environment) {
    scene = new THREE.Scene();
    scene.background = new THREE.Color( bgColor);
    scene.environment = environment;
    scene.userData.view = view;
    camera = new Camera(view)
    camera.setPosition(4, 0.2, -0.5);
    scene.add(camera.instance)
    scene.userData.camera = camera;

    debug = new Debug(document.getElementById('shaderGUI'), true);
}

export function loadScene(resources) {
    environment = new Environment(scene, resources);
 
    water = new Water(resources, { resolution: 256 });
    scene.add(water);

    // otter = new Otter(resources);
    // otter.setScale(0.2);
    // otter.play('surf');
    // scene.add(otter.model);

    scene.background = resources.items.sunsetCubeMap;
    scene.environment = resources.items.sunsetCubeMap;
    sceneLoaded = true;
}
export function getScene() {
    return scene;
}

export function setBackgroundColor(bgColor) {
    // scene.background.set(bgColor);
    // scene.background = bgColor;
    // scene.environment = bgColor;
}

export function addToDebug() {
    if(debug.active) {
        environment.addToDebug(debug);
        water.addToDebug(debug);
    }
}

export function update(time) {
    if(sceneLoaded) {
        scene.userData.camera.update();
        environment.update(time);
        water.update(time);
        // otter.update(time.delta);
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
    water = null;
    environment = null;
    // otter = null;
}