'use client';

import { Box, Stack, Button } from '@mui/material';
import styles from '@/styles/work.module.css';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function ShaderSection({ shaders, children }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const itemWidth = 30; // vw
    const itemMargin = 2; // vw
    const totalItemWidth = itemWidth + itemMargin;

    // Calculate the total width of the content inside the motion.div
    // This assumes the last item doesn't have a right margin that contributes to the scrollable width
    const contentWidth = shaders.length * totalItemWidth;

    // The x transform should move the content from 0 to -(contentWidth - viewportWidth)
    // viewportWidth is 100vw
    const x = useTransform(scrollYProgress, [0, 1], [`0vw`, `-${contentWidth - 100}vw`]);

    return (
        <Stack id="shaders" className={styles.workSection}>
            {/* This outer container creates the scrollable space */}
            <Box ref={containerRef}>
                {/* This sticky container holds the carousel and keeps it in view */}
                <Box sx={{ position: 'sticky', overflow: 'hidden' }}>
                    <motion.div style={{ x, display: 'flex', width: `${contentWidth}vw` }}>
                        {shaders.map((shader, index) => (
                            <Box key={index} sx={{ 
                                width: `${itemWidth}vw`, 
                                height: `${itemWidth}vh`, // Using itemWidth for height to maintain aspect ratio
                                position: 'relative', 
                                p: 2, // Padding inside the box
                                marginRight: `${itemMargin}vw` // Spacing between images
                            }}>
                                <Image
                                    alt={shader.source || "Shader image"}
                                    src={`/images/${shader.img}`}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </Box>
                        ))}
                    </motion.div>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
                <Link href={'/work/shader-playground'}>
                    <Button size="small" variant="contained">
                        View Shader Playground
                    </Button>
                </Link>
            </Box>
            {children}
        </Stack>
    );
}
