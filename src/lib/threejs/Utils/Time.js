import EventEmitter from './EventEmitter.js'
import * as THREE from 'three'

class Time extends EventEmitter
{
    constructor()
    {
        if(Time.instance)
        {
            return Time.instance
        }

        super()

        // Setup
        this.clock = new THREE.Clock()
        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16

        Time.instance = this

        // Wait for the next frame to avoid issues with SSR
        if (typeof window !== 'undefined') {
            window.requestAnimationFrame(() =>
            {
                this.tick()
            })
        }
    }

    tick()
    {
        const elapsedTime = this.clock.getElapsedTime();
        this.delta = elapsedTime - this.elapsed;
        this.elapsed = elapsedTime;
        this.current = Date.now();

        this.trigger('tick');

        if (typeof window !== 'undefined') {
            window.requestAnimationFrame(() =>
            {
                this.tick()
            })
        }
    }
}

// Export a singleton instance
const time = new Time();
export default time;