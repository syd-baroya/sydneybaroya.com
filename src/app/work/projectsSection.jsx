'use client';

import { Box, Stack, Button } from '@mui/material';
import styles from '@/styles/work.module.css';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function ProjectSection({ projects, children }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const itemWidth = 30; // vw
    const itemMargin = 2; // vw
    const totalItemWidth = itemWidth + itemMargin;

    let duplicatedProjects = [...projects];
    while(duplicatedProjects.length < 4) {
        duplicatedProjects = [...duplicatedProjects, ...projects];
    }

    // Calculate the total width of the content inside the motion.div
    // This assumes the last item doesn't have a right margin that contributes to the scrollable width
    const contentWidth = duplicatedProjects.length * totalItemWidth;

    // The x transform should move the content from 0 to -(contentWidth - viewportWidth)
    // viewportWidth is 100vw
    const x = useTransform(scrollYProgress, [0, 1], [`-${contentWidth - 100}vw`,`0vw`]);

    return (
        <Stack id="projects" className={styles.workSection}>
            {/* This outer container creates the scrollable space */}
            <Box ref={containerRef}>
                {/* This sticky container holds the carousel and keeps it in view */}
                <Box sx={{ position: 'sticky', overflow: 'hidden' }}>
                    <motion.div style={{ x, display: 'flex', width: `${contentWidth}vw` }}>
                        {duplicatedProjects.map((project, index) => (
                            <Box key={index} sx={{ 
                                width: `${itemWidth}vw`, 
                                height: `${itemWidth}vh`, // Using itemWidth for height to maintain aspect ratio
                                position: 'relative', 
                                p: 2, // Padding inside the box
                                marginRight: `${itemMargin}vw` // Spacing between images
                            }}>
                                <Image
                                    alt={project.source || "Project image"}
                                    src={`/images/${project.img[0]}`}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </Box>
                        ))}
                    </motion.div>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
                <Link href={'/work/projects'}>
                    <Button size="small" variant="contained"
                        sx={{
                        bgcolor: "var(--primary-text)",
                        color: "var(--secondary-text)",
                        ":hover": {
                            bgcolor: "var(--secondary-text)",
                            color: "var(--primary-text)",
                            borderRadius: "10px",
                        }}}>
                        View Projects
                    </Button>
                </Link>
            </Box>
            {children}
        </Stack>
    );
}
