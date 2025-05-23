import { useEffect, useRef } from "react";


export default function Scene({num, sceneInfo}) {

    const divClass =  "view";
    const divID = divClass + num;

    const containerRef = useRef(null);

    useEffect(() => {
        const el = containerRef.current;

        //attach object to dom element
        el.sceneInfo = sceneInfo;

        return () => {
            delete el.sceneInfo; //cleanup
        }
    }, [sceneInfo]);

    /**
     * TODO
     * want to be able to control what is in the scene, maybe have it as arguments passed into here or in a .jsx file like sections.jsx or a .js file like sources.js
     * 
     */

    return (
        <div ref={containerRef} id={ divID } className={divClass}>
        </div>
    );
}