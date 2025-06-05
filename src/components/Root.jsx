import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home.jsx";
import sections from './sections.jsx';
import NavBar from "./NavBar/NavBar.jsx";
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
            <NavBar items={sections}></NavBar>
            <Routes>
                <Route path="/" element={<Home />} />
                {sections
                    .filter(section => section.component)
                    .map(section =>
                        <Route path={section.link}  key={section.name} element={<section.component />} />
                    )

                }
            </Routes>
        </BrowserRouter>
    </>
}

export default Root;