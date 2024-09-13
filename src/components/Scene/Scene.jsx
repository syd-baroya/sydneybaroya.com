import { useEffect, useRef } from "react";
import threeJSEntryPoint from "../../scene/threeJSEntryPoint.js";

let didInit = false;

export default function Scene() {

    const threeRootRef = useRef();

    useEffect(() => {
        if(!didInit) {
            didInit = true;
            threeJSEntryPoint(threeRootRef.current);
        }
    }, [])

    return (
        <div>
            <div style={{height: '70vh' }}></div>
            <div className="experience" ref={ threeRootRef } />
        </div>
    );
}