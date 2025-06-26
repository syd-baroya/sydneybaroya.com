import Experience from './Experience.js';

class ThreeJSEntryPoint {
    constructor(canvas) {
        this.experience = new Experience(canvas, document.querySelectorAll('.view'));
    }
    
    destroy() {
        if(this.experience) {
            this.experience.destroy();
        }
    }
}

export default ThreeJSEntryPoint;