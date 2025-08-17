
'use client';

import { Box, Stack, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import '@/styles/work.module.css';
import FractureText from '@/components/animations/FractureText';
// import ProjectsSection from "./projectsSection";
// import ShaderSection from './shadersSection';
import PROJECT_DATA from '@/lib/data/projects';
import {SHADER_DATA} from '@/lib/data/shaders';

export default function WorkSection({ }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start end', 'end start']
  });

  const itemWidth = 25; // vw
  const itemMargin = 1; // vw
  const totalItemWidth = itemWidth + itemMargin;

  let duplicatedWork = [...PROJECT_DATA, ...SHADER_DATA];
  while(duplicatedWork.length < 8) {
      duplicatedWork = [...duplicatedWork, ...PROJECT_DATA, ...SHADER_DATA];
  }

  // Calculate the total width of the content inside the motion.div
  // This assumes the last item doesn't have a right margin that contributes to the scrollable width
  const contentWidth = duplicatedWork.length * totalItemWidth;

  // The x transform should move the content from 0 to -(contentWidth - viewportWidth)
  // viewportWidth is 100vw
  const x = useTransform(scrollYProgress, [0, 1], [`0vw`, `-${contentWidth - 100}vw`]);

  return (
    <Stack className="section" id="work" sx={{ margin: '5vh'}}>
        {/* <ProjectsSection projects={PROJECT_DATA}></ProjectsSection>
        <ShaderSection shaders={SHADER_DATA}></ShaderSection> */}
        <Box ref={containerRef}>
                {/* This sticky container holds the carousel and keeps it in view */}
                <Box sx={{ position: 'sticky', overflow: 'hidden' }}>
                    <motion.div style={{ x, display: 'flex', width: `${contentWidth}vw` }}>
                        {duplicatedWork.map((shader, index) => (
                            <Box key={index} sx={{ 
                                width: `${itemWidth}vw`, 
                                height: `${itemWidth}vh`, // Using itemWidth for height to maintain aspect ratio
                                position: 'relative', 
                                p: 2, // Padding inside the box
                                marginRight: `${itemMargin}vw` // Spacing between images
                            }}>
                                <Image
                                    alt={shader.name || "Shader Image"}
                                    src={`/images/${shader.img}`}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </Box>
                        ))}
                    </motion.div>
                </Box>
            </Box>
            <Stack direction='row' spacing={2} sx={{ justifyContent: "center", alignItems: "center", width: "100%"}}>
                <Link href={'/work/projects'}>
                        <FractureText>Projects</FractureText>
                </Link>
                <Link href={'/work/shader-playground'}>
                    
                        <FractureText>Shader Playground</FractureText>
                </Link>
            </Stack>
    </Stack>
  )
}