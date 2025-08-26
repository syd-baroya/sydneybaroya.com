
'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton, Typography } from '@mui/material';

export default function Lightbox({ currentImage, onClose, onPrev, onNext }) {
  // Touch swipe handling
  let touchStartX = 0;
  const handleTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 50) onPrev();
    else if (deltaX < -50) onNext();
  };

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose]);

  if (!currentImage) return null;

  return (
    <AnimatePresence>
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
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          style={{ maxHeight: '80%', maxWidth: '90%', objectFit: 'contain' }}
        />
        {currentImage.caption && (
          <Typography variant="body2" sx={{ color: '#fff', mt: 2 }}>
            {currentImage.caption}
          </Typography>
        )}
        <IconButton
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          sx={{ position: 'absolute', left: 16, color: '#fff' }}
        >‹</IconButton>
        <IconButton
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          sx={{ position: 'absolute', right: 16, color: '#fff' }}
        >›</IconButton>
        <IconButton
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          sx={{ position: 'absolute', top: 16, right: 16, color: '#fff' }}
        >×</IconButton>
      </motion.div>
    </AnimatePresence>
  );
}
