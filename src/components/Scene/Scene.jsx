import { useEffect, useRef } from "react";
import threeJSEntryPoint from "../../scene/threeJSEntryPoint.js";

export default function Scene() {

    const threeRootRef = useRef();

    useEffect(() => {
        threeJSEntryPoint(threeRootRef.current);
    }, [])

    return (
        <div>
            <div style={{height: '75vh' }}></div>
            <div className="experience" ref={ threeRootRef } />
        </div>
    );
}