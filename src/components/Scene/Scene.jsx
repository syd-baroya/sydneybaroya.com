import { useEffect, useRef } from "react";
import ThreeJSEntryPoint from "../../scene/threeJSEntryPoint.js";

export default function Scene({num, sceneInfo}) {

    const divClass =  "view";
    const divID = divClass + num;

    const containerRef = useRef(null);

    useEffect(() => {
        const threeJSEntryPoint = new ThreeJSEntryPoint(containerRef.current, sceneInfo);


        const handleUnload = () => {
            console.log('Destroying');
            // Perform actions before the component unloads
            threeJSEntryPoint.destroy();
        };
        window.addEventListener('beforeunload', handleUnload);
        return () => {
            // handleUnload();
            window.removeEventListener('beforeunload', handleUnload);
        };
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