'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from "react";
import Footer from "../Footer";

export default function AnimatedFooter() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  });

  // Calculate y based on dynamic footerHeight
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div ref={container}>
      {isClient && (
        <motion.div
          style={{ y }} // Add position: fixed and bottom: 0
        >
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
