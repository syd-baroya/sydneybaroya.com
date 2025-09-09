'use client';

import { useRouter } from 'next/navigation';
import { IconButton, Box, Stack} from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState, useRef } from 'react';
import React from 'react';
import { useActiveCard } from '@/lib/hooks/useActiveCard';
import { useScroll } from '@/context/ScrollContext';
import Magnetic from '@/components/animations/Magnetic';
import Image from "next/image";
import MdxWrapper from "@/components/MdxWrapper";

export default function ProjectModalClient({ project }) {
  const router = useRouter();
  const { setActiveSlug } = useActiveCard();
  const { setWrapper } = useScroll();
  const modalRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [MdxComponent, setMdxComponent] = useState(null);

  useEffect(() => {
    const loadMdx = async () => {
      try {
        const { default: Mdx } = await import(`@/lib/content/projects/${project.mdxFile}`);
        setMdxComponent(() => Mdx);
      } catch (error) {
        console.error("Failed to load MDX component", error);
      }
    };

    if (project) {
      loadMdx();
    }
  }, [project]);


  const handleClose = () => {
    router.push('/work/projects/');
  };

  useEffect(() => {
    const scrollable = modalRef.current;
    if (!scrollable) return;

    const handleScroll = () => {
      const scrollTop = scrollable.scrollTop;
      setIsScrolled(scrollTop > 10);
    };

    scrollable.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      scrollable.removeEventListener('scroll', handleScroll);
    };
  }, [modalRef]);

  useEffect(() => {
    if (!project) return;
    setActiveSlug(project.slug);
    setWrapper(modalRef.current);
    const onEsc = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('keydown', onEsc);
      setActiveSlug(null);
      setWrapper(null);
    };
  }, [project]);


  if (!project) return null;

  return (
      <motion.div
        ref={modalRef}
        layoutId={`card-${project.slug}`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'var(--background-color)',
          padding: '40px',
          overflowY: 'auto',
          zIndex: 1300,
          color: 'var(--primary-text)',
        }}
      >
        <Stack direction="column" sx={{ justifyContent: 'center', alignItems: 'center' }}>
          {/* Header Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'start', mb: 3, width: '100%', height: '48px' }}>
             <Image
                  src={project.thumbnail}
                  alt="Project Thumbnail"
                  width={50}
                  height={50}
                  style={{ aspectRatio: '1 / 1', objectFit: 'fill' }}
              />
            <Box sx={{
              position: 'fixed',
              top: 40,
              right: 60,
              zIndex: 1301,
            }}>
              <Magnetic>
                <IconButton 
                  onClick={handleClose} 
                  aria-label="close" 
                  sx={{
                    color: isScrolled ? 'var(--background-color)' : 'var(--primary-text)',
                    backgroundColor: isScrolled ? 'var(--primary-text)' : 'transparent',
                    boxShadow: isScrolled ? '3' : 'none',
                    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      backgroundColor: isScrolled ? 'var(--primary-text)' : 'transparent',
                      color: isScrolled ? 'var(--secondary-text)' : 'var(--primary-text)',
                      strokeWidth: '2'
                    }
                  }}
                >
                  <CloseIcon fontSize="large" />
                </IconButton>
              </Magnetic>
            </Box>
          </Box>
          {/* Dynamic Content (Paragraphs + Mid Images) */}
          <Stack spacing={2} sx={{ mt: 2 }}>
            {MdxComponent && (
              <MdxWrapper>
                  <MdxComponent />
              </MdxWrapper>
            )}
          </Stack>
        </Stack>
      </motion.div>
  );
}
