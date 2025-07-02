'use client';

import { useEffect, useRef } from "react";
import { forwardRef } from "react";
import { useThreeCanvasRefs } from '@/context/ThreeCanvasContext';

const SceneViewport = forwardRef(function SceneViewport({index, className, children, scene}, ref) {
    const localRef = useRef(null);
    const {viewRefs, triggerUpdate} = useThreeCanvasRefs();
    useEffect(() => {
        const domRef = ref || localRef;

        if (domRef?.current) {
            domRef.current.scene = scene;
            viewRefs.current[index] = domRef;
            triggerUpdate();
        }

        return () => {
            if (domRef?.current) {
                delete domRef.current.scene;
                viewRefs.current[index] = null;
            }
        };
    }, []);
    
    return (
        <div ref={ref || localRef} className={className}>
            {children}
        </div>
    );
});

export default SceneViewport;