'use client';

import { useRouter } from 'next/navigation';
import { Dialog, IconButton, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import PROJECT_CARDS from '@/lib/data/projects';
import { use, useEffect, useState } from 'react';
import { useActiveCard } from '@/lib/hooks/useActiveCard';

export default function ProjectModalPage(props) {
  const params = use(props.params);
  const router = useRouter();
  const project = PROJECT_CARDS.find((p) => p.slug === params.slug);
  const { setActiveSlug } = useActiveCard();
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    // setActiveSlug(null);
    setIsClosing(true);
    router.back();
  };

  const handleAnimationEnd = () => {
    if (isClosing) {
      setActiveSlug(null);
      setIsClosing(false);
    }
  }
  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && handleClose();
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  if (!project) return null;

  return (
    <Dialog
      open
      fullScreen
      onClose={handleClose}
      slotProps={{
        paper: { 
        component: motion.div,
        layoutId: `card-${project.slug}`, // match layoutId
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.9, opacity: 0 },
        transition: { duration: 0.4 },
        onAnimationComplete: handleAnimationEnd,
        sx: {
          background: 'var(--background-color)',
          p: 4,
          color: 'var(--primary-text)',
          position: 'relative',
          zIndex: 1300,
        },
       }
      }}
    >
      <motion.div
        layoutId={`card-container-${project.slug}`}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          background: 'var(--background-color)',
          padding: 40,
          overflowY: 'auto',
          color: 'var(--primary-text)'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
          <IconButton onClick={handleClose} aria-label="back" sx={{ color: 'var(--primary-text)' }}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={handleClose} aria-label="close" sx={{ color: 'var(--primary-text)' }}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>

        <motion.img
          src={project.img[0]}
          alt={project.cardTitle}
          layoutId={`card-image-${project.slug}`}
          style={{ width: '50%', borderRadius: 8, marginBottom: 24 }}
        />
        <motion.h2 layoutId={`card-title-${project.slug}`}>{project.cardTitle}</motion.h2>
        <Typography variant='body1'>
          <strong>Technologies:</strong> {project.tech}
        </Typography>
        <Typography variant='body2'>{project.info}</Typography>
      </motion.div>
    </Dialog>
  );
}
