import Experience from './Experience.js';

export default container => {
    const canvas = createCanvas(document, container);

    const experience = new Experience(canvas);

    function createCanvas(document, container) 
    {
        const canvas = document.createElement('canvas');
        container.appendChild(canvas);
        return canvas;
    }
};