'use client';

import { useRouter } from 'next/navigation';
import { IconButton, Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import PROJECT_CARDS from '@/lib/data/projects';
import { use, useEffect, useState, useRef } from 'react';
import { useActiveCard } from '@/lib/hooks/useActiveCard';
import { useScroll } from '@/context/ScrollContext';

export default function ProjectModalPage(props) {
  const params = use(props.params);
  const router = useRouter();
  const project = PROJECT_CARDS.find((p) => p.slug === params.slug);
  const { setActiveSlug } = useActiveCard();
  const { setWrapper } = useScroll();
  const modalRef = useRef(null);

  const handleClose = () => {
    router.back();
  };

  useEffect(() => {
    setActiveSlug(project.slug);
    setWrapper(modalRef.current);
    const onEsc = (e) => e.key === 'Escape' && handleClose();
    window.addEventListener('keydown', onEsc);
    return () => {
        window.removeEventListener('keydown', onEsc);
        setActiveSlug(null);
        setWrapper(null);
    }
  }, []);

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
            padding: 40,
            overflowY: 'auto',
            zIndex: 1300,
            color: 'var(--primary-text)',
        }}
    >
      <Stack>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <IconButton onClick={handleClose} aria-label="back" sx={{ color: 'var(--primary-text)' }}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={handleClose} aria-label="close" sx={{ color: 'var(--primary-text)' }}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <motion.img
              src={`/images/${project.img}`}
              alt={project.name}
              layoutId={`card-image-${project.slug}`}
              style={{ width: '50%', borderRadius: 8, marginBottom: 24 }}
            />
          </Box>
          <motion.h2 layoutId={`card-title-${project.slug}`}>{project.name}</motion.h2>
          <Typography variant='body1'>
            <strong>Technologies:</strong> {project.tech}
          </Typography>
          <Typography variant='body2'>{project.info}</Typography>
        </Stack>
      </Stack>
    </motion.div>
  );
}
