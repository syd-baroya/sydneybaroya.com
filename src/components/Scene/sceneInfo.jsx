import Cube from '../../lib/threejs/World/Cube.js';
import Floor from '../../lib/threejs/World/Floor.js';
import Fox from '../../lib/threejs/World/Fox.js';

export const SCENE_INFO = {
  home: [
    {
        objectRef: Fox,
        shader: null
    },
    {
        objectRef: Floor,
        shader: null
    }
  ],
  tools: [
    {
        objectRef: Cube,
        shader: null
    }
  ]
};

export const home = SCENE_INFO.home;
export const tools = SCENE_INFO.tools;