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
        this.currentAction = 'idle';
        
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

        this.resource.animations.forEach(element => {
            this.animation.actions[element.name] = this.animation.mixer.clipAction(element)
        });

        this.animation.actions.current = this.animation.actions.idle
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
            oldAction.stop();
            this.currentAction = name;
        }
    }

    play(name) { this.animation.play(name); }

    update(delta) {
        this.animation.mixer.update(delta)
    }

    mouseMove(mousePosition, camera) {
        if(this.head && (this.currentAction === 'idle' || this.currentAction === 'paddle')) {
            this.mouseTarget.copy(Raycast.mousePositionTo3D(mousePosition, this.head.position, camera));
            this.mouseTarget.y -= 3;
            this.head.lookAt(this.mouseTarget);
        }
    }
    addToDebug(debug) {
        const debugFolder = debug.ui.addFolder('otter');
    }
}