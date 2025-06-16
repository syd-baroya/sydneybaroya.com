import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar/NavBar.jsx";
import SECTIONS from "../app/sections.jsx";
import AppRoutes from "./AppRoutes.jsx";

import ThreeJSEntryPoint from "../scene/threeJSEntryPoint.js";
import { useEffect, useRef } from "react";
function Root() {
 const threeJSEntryPoint = useRef();
    const canvasID = "threeJSCanvas";

    useEffect(() => {
        threeJSEntryPoint.current = new ThreeJSEntryPoint(canvasID);
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
    return <>
        <BrowserRouter>
            <canvas id={canvasID} />
            <NavBar items={SECTIONS}></NavBar>
            <AppRoutes sections={SECTIONS}></AppRoutes>
        </BrowserRouter>
    </>
}

export default Root;