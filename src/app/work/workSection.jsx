'use client';

import { Box, Stack } from '@mui/material';
import Link from 'next/link';
import { useRef, useState, useLayoutEffect } from 'react';
import getSizes from '@/lib/threejs/utils/Sizes';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import '@/styles/work.module.css';
import FractureText from '@/components/animations/FractureText';
// import ProjectsSection from "./projectsSection";
// import ShaderSection from './shadersSection';
import PROJECT_DATA from '@/lib/data/projects';
import {SHADER_DATA} from '@/lib/data/shaders';
import Magnetic from '@/components/animations/Magnetic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function WorkSection({ }) {
  const containerRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  useLayoutEffect(() => {
    const sizes = getSizes();
    if (!sizes) return;

    const handleResize = () => {
      if (containerRef.current) {
        setViewportWidth(containerRef.current.offsetWidth);
      }
    };

    sizes.on('resize', handleResize);
    handleResize();

    return () => {
      sizes.off('resize', handleResize);
    };
  }, []);

  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start end', 'end start']
  });

  const itemWidth = 25; // vw
  const itemMargin = 50; // px
  const maxItemWidthInPx = 350;
  const itemWidthInPx = Math.min((itemWidth / 100) * viewportWidth, maxItemWidthInPx);
  const totalItemWidth = itemWidthInPx + itemMargin;

  let duplicatedWork = [...PROJECT_DATA];
  while(duplicatedWork.length < 8) {
      duplicatedWork = [...duplicatedWork, ...PROJECT_DATA];
  }

  const contentWidth = duplicatedWork.length * totalItemWidth;

  const x = useTransform(scrollYProgress, [0, 1], [0, -(contentWidth - viewportWidth)]);

  return (
    <Stack className="section" id="work" spacing={5} sx={{ margin: '4vh'}}>
        {/* <ProjectsSection projects={PROJECT_DATA}></ProjectsSection>
        <ShaderSection shaders={SHADER_DATA}></ShaderSection> */}
        <Box ref={containerRef}>
                {/* This sticky container holds the carousel and keeps it in view */}
                <Box sx={{ position: 'sticky', overflow: 'hidden' }}>
                    <motion.div style={{ x, display: 'flex', width: `${contentWidth}px` }}>
                        {duplicatedWork.map((shader, index) => (
                            <Box key={index} sx={{ 
                                width: `${itemWidth}vw`, 
                                height: `${itemWidth}vw`,
                                maxWidth: `${maxItemWidthInPx}px`,
                                maxHeight: `${maxItemWidthInPx}px`,
                                position: 'relative', 
                                p: 2, // Padding inside the box
                                marginRight: `${itemMargin}px` // Spacing between images
                            }}>
                                <Image
                                    alt={shader.name || "Shader Image"}
                                    src={shader.thumbnail}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </Box>
                        ))}
                    </motion.div>
                </Box>
            </Box>
            <Stack direction='row' spacing={2} sx={{ justifyContent: "space-around", alignItems: "center", width: "100%"}}>
                <Link href={'/work/projects'}>
                  <Magnetic>
                    <Box sx={{ color: "var(--primary-text)", fontSize: "1.5rem", ":hover": { fontWeight: "bold"} }}>
                      <FractureText>Projects</FractureText>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs"/>
                    </Box>
                  </Magnetic>
                </Link>
              <Link href={'/work/shader-playground'}>
                <Magnetic>
                  <Box sx={{ color: "var(--primary-text)", fontSize: "1.5rem", ":hover": { fontWeight: "bold"} }}>
                    <FractureText>Shader Playground</FractureText>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs"/>
                  </Box>
                </Magnetic>
              </Link>
            </Stack>
    </Stack>
  )
}