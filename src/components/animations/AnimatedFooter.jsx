'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
import { usePathname } from 'next/navigation';
import Footer from "../Footer";

export default function AnimatedFooter() {
  const pathname = usePathname();

  if (pathname === '/work/shader-playground') {
    return null; // Do not render the footer on this page
  }

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end']
  });

  // Calculate y based on dynamic footerHeight
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <div ref={container}>
        <motion.div
          style={{ y }} // Add position: fixed and bottom: 0
        >
          <Footer />
        </motion.div>
    </div>
  );
}
