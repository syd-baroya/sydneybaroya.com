import EventEmitter from './EventEmitter.js'

class Time extends EventEmitter
{
    constructor()
    {
        super()

        // Setup
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
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start

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