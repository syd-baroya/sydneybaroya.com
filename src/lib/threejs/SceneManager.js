import Renderer from './Renderer.js';
import Debug from './utils/Debug.js'
import Sizes from './utils/Sizes.js'
import Time from './utils/Time.js'

let debug, sizes, time, renderer;
let scenes = [];
export function init(canvas, bgColor) {
    debug = new Debug()
    sizes = new Sizes()
    time = new Time()

    renderer = new Renderer(canvas, sizes, bgColor);

    // Resize event
    sizes.on('resize', () =>
    {
        resize()
    })

    // Time tick event
    time.on('tick', () =>
    {
        update()
    })

    function resize()
    {
        scenes.forEach((s) => s.resize?.());
        renderer.resize()
    }

    function update()
    {
        renderer.clearForUpdate();
        scenes.forEach((s) => {
            s.update?.(time.delta);
            renderer.update?.(s.getScene());
        });
    }
}

export function registerScene(scene) {
    scenes.push(scene);
}

export function unregisterAllScenes() {
    scenes = [];
}

export function setBackgroundColor(bgColor) {
    scenes.forEach((s) => s.setBackgroundColor?.(bgColor));
    renderer.setClearColor(bgColor);
}

export function destroy() {
    sizes.off('resize');
    time.off('tick');

    scenes.forEach((s) => s.destroy?.());
    renderer.destroy();
    if(debug.active) {debug.ui.destroy();}

    debug = null;
    sizes = null;
    time = null;
    renderer = null;

}