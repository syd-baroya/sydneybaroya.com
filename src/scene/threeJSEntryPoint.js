import Experience from './Experience.js';

class ThreeJSEntryPoint {
    constructor(container, view) {
        
        this.experience = new Experience(container, view);
    }
    
    destroy() {
        if(this.experience) {
            this.experience.destroy();
        }
    }
}

export default ThreeJSEntryPoint;