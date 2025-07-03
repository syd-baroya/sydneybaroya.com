import * as THREE from 'three'

export default class Otter
{
    constructor(resources)
    {
        // Resource
        this.resource = resources.items.otterModel;

        this.animation = {};
        this.model = null;
        
        this.initModel();
        this.initAnimation()
    }

    initModel()
    {
        this.model = this.resource.scene

        this.model.rotation.z -= Math.PI / 4;
        this.model.rotation.x -= Math.PI / 4;
    }

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

    addToDebug(debug) {
        const debugFolder = debug.ui.addFolder('otter');
    }
}