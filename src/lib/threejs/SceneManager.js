import Renderer from './Renderer.js';
import getSizes from './utils/Sizes'
import time from './utils/Time'
import MouseEvent from './utils/MouseEvents'

let sizes, mouseEvent, raycast, renderer;
let scenes = [];
export function init(canvas, bgColor, resources) {
    sizes = getSizes();
    //time = new Time()
    mouseEvent = new MouseEvent();

    renderer = new Renderer(canvas, sizes, bgColor);

    resources.on('ready', () =>
    {
        loadScenes();
    })

    // Resize event
    sizes.on('resize', () =>
    {
        resize()
    })

    // Time tick event
    time.on('tick.scenemanager', () =>
    {
        update()
    })

    mouseEvent.on('mousemove', (position) =>
    {
        scenes.forEach((s) => s.mouseMove?.(position));
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
            s.update?.(time);
            renderer.update?.(s.getScene());
        });
    }

    function loadScenes() {
        scenes.forEach((s) => {
            s.loadScene?.(resources);
            s.addToDebug?.();
        })
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
    time.off('tick.scenemanager');
    mouseEvent.off('mousemove');

    scenes.forEach((s) => s.destroy?.());
    renderer.destroy();

    sizes = null;
    renderer = null;

}