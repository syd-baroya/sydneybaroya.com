import * as THREE from 'three'
import * as Raycast from '@/lib/threejs/utils/Raycast'

export default class Otter
{
    constructor(resources)
    {
        // Resource
        this.resource = resources.items.otterModel;

        this.animation = {};
        this.model = null;
        this.head = null;
        this.mouseTarget = new THREE.Vector3();
        
        this.initModel();
        this.initAnimation()
    }

    initModel()
    {
        this.model = this.resource.scene
        this.head = this.model.getObjectByName('head');
    }

    setScale(scale) { this.model.scale.set(scale, scale, scale) }

    initAnimation()
    { 
        // Mixer
        this.animation.mixer = new THREE.AnimationMixer(this.model)
        
        // Actions
        this.animation.actions = {}
        
        this.animation.actions.paddle = this.animation.mixer.clipAction(this.resource.animations[0])
        
        this.animation.actions.current = this.animation.actions.paddle
        this.animation.actions.current.play()

        // Play the action
        this.animation.play = (name) =>
        {
            const newAction = this.animation.actions[name]
            const oldAction = this.animation.actions.current

            newAction.reset()
            newAction.play()
            newAction.crossFadeFrom(oldAction, 1)

            this.animation.actions.current = newAction
        }
    }

    update(delta) {
        this.animation.mixer.update(delta * 0.001)
    }

    mouseMove(mousePosition, camera) {
        if(this.head) {
            this.mouseTarget.copy(Raycast.mousePositionTo3D(mousePosition, this.head.position, camera));
            this.mouseTarget.y -= 3;
            this.head.lookAt(this.mouseTarget);
        }
    }
    addToDebug(debug) {
        const debugFolder = debug.ui.addFolder('otter');
    }
}