import Experience from './Experience.js';

const canvasID = "threeJSCanvas";
class ThreeJSEntryPoint {
    constructor(container) {   
        const canvas = getOrCreateCanvas(document, container);

        this.experience = new Experience(canvas);
    
        function getOrCreateCanvas(doc, container) 
        {
            let canvas = doc.getElementById(canvasID);
            if (!canvas) {
                canvas = doc.createElement('canvas');
                canvas.id = canvasID;
                container.appendChild(canvas);
            }
            return canvas;
        }
    }
    
    destroy() {
        if(this.experience) {
            this.experience.destroy();
        }
    }
}

export default ThreeJSEntryPoint;