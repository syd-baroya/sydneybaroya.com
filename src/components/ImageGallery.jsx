
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ImageGallery({ galleryImages, switchImageTime }) {
  const timerRef = useRef(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Carousel controls
  const showPrevCarousel = () => {
    setCarouselIndex((i) => (i > 0 ? i - 1 : galleryImages.length - 1));
    resetTimer();
  };
  const showNextCarousel = useCallback(() => {
    setCarouselIndex((i) => (i < galleryImages.length - 1 ? i + 1 : 0));
    resetTimer();
  }, [galleryImages]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      showNextCarousel();
    }, switchImageTime*1000);
  };

  useEffect(() => {
    if (galleryImages?.length > 1) {
      resetTimer();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [galleryImages, showNextCarousel]);

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
    <>
      {galleryImages?.length > 0 && (
        <Box sx={{ position: 'relative', width: {xs: '100%', md: '70%', lg: '50%'}, height: '500px', mb: 3, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
          <AnimatePresence initial={false}>
            <motion.img
              key={carouselIndex}
              src={galleryImages[carouselIndex].src}
              alt={galleryImages[carouselIndex].alt}
              custom={1}
              variants={carouselVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 100, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 8,
                cursor: 'pointer',
              }}
            />
          </AnimatePresence>
          {galleryImages.length > 1 && (
            <>
              <IconButton onClick={showPrevCarousel} sx={{ position: 'absolute', top: '50%', left: 16, color: 'white', transform: 'translateY(-50%)', zIndex: 2 }}>
                <ArrowBackIosIcon />
              </IconButton>
              <IconButton onClick={showNextCarousel} sx={{ position: 'absolute', top: '50%', right: 16, color: 'white', transform: 'translateY(-50%)', zIndex: 2 }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </>
          )}
        </Box>
      )}
    </>
  );
}
