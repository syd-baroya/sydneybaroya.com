import { useEffect, useRef } from "react";
import ThreeJSEntryPoint from "../../scene/threeJSEntryPoint.js";

export default function Scene() {

    const threeRootRef = useRef();
    const threeJSEntryPoint = useRef();

    useEffect(() => {
        threeJSEntryPoint.current = new ThreeJSEntryPoint(threeRootRef.current);
        const handleUnload = () => {
            console.log('Destroying');
            // Perform actions before the component unloads
            threeJSEntryPoint.current.destroy();
        };
        window.addEventListener('beforeunload', handleUnload);
        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, [])


    return (
        <div>
            <div style={{height: '70vh' }}></div>
            <div className="experience" ref={ threeRootRef } />
        </div>
    );
}