'use client';

import { useRouter } from 'next/navigation';
import { IconButton, Box, Typography, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PROJECT_CARDS from '@/lib/data/projects';
import { use, useEffect, useState, useRef, useCallback } from 'react';
import { useActiveCard } from '@/lib/hooks/useActiveCard';
import { useScroll } from '@/context/ScrollContext';

export default function ProjectModalPage(props) {
  const params = use(props.params);
  const router = useRouter();
  const project = PROJECT_CARDS.find((p) => p.slug === params.slug);
  const { setActiveSlug } = useActiveCard();
  const { setWrapper } = useScroll();
  const modalRef = useRef(null);
  const timerRef = useRef(null);

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleClose = () => {
    router.back();
  };

  // Carousel controls
  const showPrevCarousel = () => {
    setCarouselIndex((i) => (i > 0 ? i - 1 : project.galleryImages.length - 1));
    resetTimer();
  };
  const showNextCarousel = useCallback(() => {
    setCarouselIndex((i) => (i < project.galleryImages.length - 1 ? i + 1 : 0));
    resetTimer();
  }, [project]);

  // Lightbox controls
  const closeLightbox = () => setLightboxIndex(null);
  const showPrevLightbox = useCallback(
    () => setLightboxIndex((i) => (i > 0 ? i - 1 : project.galleryImages.length - 1)),
    [project]
  );
  const showNextLightbox = useCallback(
    () => setLightboxIndex((i) => (i < project.galleryImages.length - 1 ? i + 1 : 0)),
    [project]
  );
  
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      showNextCarousel();
    }, 5000);
  };

  useEffect(() => {
    if (project?.galleryImages?.length > 1) {
      resetTimer();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [project, showNextCarousel]);


  // Touch swipe handling
  let touchStartX = 0;
  const handleTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 50) showPrevLightbox();
    else if (deltaX < -50) showNextLightbox();
  };

  useEffect(() => {
    if (!project) return;
    setActiveSlug(project.slug);
    setWrapper(modalRef.current);
    const onEsc = (e) => {
      if (e.key === 'Escape') {
        lightboxIndex !== null ? closeLightbox() : handleClose();
      }
    };
    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('keydown', onEsc);
      setActiveSlug(null);
      setWrapper(null);
    };
  }, [project, lightboxIndex]);

  if (!project) return null;

  // Combine paragraphs with midImages inserted evenly
  const combinedContent = [];
  const paragraphs = project.paragraphs || [project.info];
  const midImages = project.midImages || [];
  const insertEvery = Math.floor(paragraphs.length / (midImages.length + 1)) || paragraphs.length;
  paragraphs.forEach((p, i) => {
    combinedContent.push({ type: 'text', content: p });
    if (midImages.length && (i + 1) % insertEvery === 0 && midImages[(i + 1) / insertEvery - 1]) {
      combinedContent.push({ type: 'image', ...midImages[(i + 1) / insertEvery - 1] });
    }
  });

  const carouselVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

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
      <Stack direction="column" sx={{ justifyContent: 'center', alignItems: 'center' }}>
        {/* Header Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'end', mb: 3, width: '100%' }}>
          <IconButton onClick={handleClose} aria-label="close" sx={{ color: 'var(--primary-text)' }}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>

        {/* Image Carousel */}
        {project.galleryImages?.length > 0 && (
          <Box sx={{ position: 'relative', width: {xs: '100%', md: '70%', lg: '50%'}, height: '500px', mb: 3, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
            <AnimatePresence initial={false}>
              <motion.img
                key={carouselIndex}
                src={project.galleryImages[carouselIndex].src}
                alt={project.galleryImages[carouselIndex].alt}
                custom={1}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 8,
                  cursor: 'pointer',
                }}
                onClick={() => setLightboxIndex(carouselIndex)}
              />
            </AnimatePresence>
            {project.galleryImages.length > 1 && (
              <>
                <IconButton onClick={showPrevCarousel} sx={{ position: 'absolute', top: '50%', left: 16, color: 'white', transform: 'translateY(-50%)' }}>
                  <ArrowBackIosIcon />
                </IconButton>
                <IconButton onClick={showNextCarousel} sx={{ position: 'absolute', top: '50%', right: 16, color: 'white', transform: 'translateY(-50%)' }}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </>
            )}
          </Box>
        )}

        <motion.h2 layoutId={`card-title-${project.slug}`}>{project.title}</motion.h2>
        <Typography variant="body1">
          <strong>Technologies:</strong> {project.tech}
        </Typography>

        {/* Dynamic Content (Paragraphs + Mid Images) */}
        <Stack spacing={2} sx={{ mt: 2 }}>
          {combinedContent.map((item, i) =>
            item.type === 'text' ? (
              <Typography key={i} variant="body2">{item.content}</Typography>
            ) : (
              <motion.img
                key={i}
                src={item.src}
                alt={item.alt || ''}
                style={{ width: '100%', borderRadius: 12, margin: '24px 0' }}
                whileHover={{ scale: 1.02 }}
              />
            )
          )}
        </Stack>

        {/* Fullscreen Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              className="lightbox"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.9)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2000,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={project.galleryImages[lightboxIndex].src}
                alt={project.galleryImages[lightboxIndex].alt}
                style={{ maxHeight: '80%', maxWidth: '90%', objectFit: 'contain' }}
              />
              {project.galleryImages[lightboxIndex].caption && (
                <Typography variant="body2" sx={{ color: '#fff', mt: 2 }}>
                  {project.galleryImages[lightboxIndex].caption}
                </Typography>
              )}
              <IconButton
                onClick={(e) => { e.stopPropagation(); showPrevLightbox(); }}
                sx={{ position: 'absolute', left: 16, color: '#fff' }}
              >‹</IconButton>
              <IconButton
                onClick={(e) => { e.stopPropagation(); showNextLightbox(); }}
                sx={{ position: 'absolute', right: 16, color: '#fff' }}
              >›</IconButton>
              <IconButton
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                sx={{ position: 'absolute', top: 16, right: 16, color: '#fff' }}
              >×</IconButton>
            </motion.div>
          )}
        </AnimatePresence>
      </Stack>
    </motion.div>
  );
}
