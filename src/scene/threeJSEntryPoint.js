import Experience from './Experience.js';

class ThreeJSEntryPoint {
    constructor(container, canvasID) {   
        const canvas = getOrCreateCanvas(document, container);

        this.experience = new Experience(canvas, document.querySelectorAll('.view'));
    
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