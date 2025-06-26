'use client';

import { useEffect } from "react";
import { forwardRef } from "react";

const SceneViewport = forwardRef(function SceneViewport({className, children, sceneInfo}, ref) {

    useEffect(() => {
        if (ref?.current) {
            ref.current.sceneInfo = sceneInfo;

        return () => {
            if (ref?.current) {
                delete ref.current.sceneInfo;
            }
        };
        }
    }, [ref, sceneInfo]);

    /**
     * TODO
     * want to be able to control what is in the scene, maybe have it as arguments passed into here or in a .jsx file like sections.jsx or a .js file like sources.js
     * 
     */
    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
});

export default SceneViewport;