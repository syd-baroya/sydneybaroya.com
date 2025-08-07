import EventEmitter from './EventEmitter.js'
import * as THREE from 'three'

class Time extends EventEmitter
{
    constructor()
    {
        super()

        // Setup
        this.clock = new THREE.Clock()
        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16

        this.frameID = window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }

    tick()
    {
        this.current = Date.now();
        this.delta = this.clock.getDelta();
        this.elapsed = this.clock.getElapsedTime();

        this.trigger('tick')

        this.frameID = window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }

    off(names) {
        super.off(names);
        window.cancelAnimationFrame(this.frameID);
    }
}

export default Time;