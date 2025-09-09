
'use client';

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Magnetic({ children }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 100, damping: 10, mass: 0.5 };
    const magneticX = useSpring(x, springConfig);
    const magneticY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const offsetX = clientX - centerX;
        const offsetY = clientY - centerY;

        x.set(offsetX * 0.2);
        y.set(offsetY * 0.2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: magneticX, y: magneticY }}
        >
            {children}
        </motion.div>
    );
}
