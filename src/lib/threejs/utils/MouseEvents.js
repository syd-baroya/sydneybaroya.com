import EventEmitter from "./EventEmitter.js";

class MouseEvents extends EventEmitter
{
    constructor()
    {
        super();
        this.mousePosition = {x: 0, y: 0};

        window.addEventListener('mousemove', (event) => {
            this.mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;
            this.trigger('mousemove', [this.mousePosition]);
        });
    }

}

export default MouseEvents;

