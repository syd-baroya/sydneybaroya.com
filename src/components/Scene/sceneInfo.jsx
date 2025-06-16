import Cube from "../../scene/World/Cube";
import Floor from "../../scene/World/Floor";
import Fox from "../../scene/World/Fox";

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