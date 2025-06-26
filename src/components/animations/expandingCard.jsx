'use client';

import {Grid, Typography, Card, CardContent, CardMedia, Stack, Box, Dialog  } from "@mui/material";
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

export default function ExpandingCard({content, index, colWidth }) {
    const [open, setOpen] = useState(false);
    const [cardBounds, setCardBounds] = useState(null);
    const cardRef = useRef(null);

    // Capture the card's position and size on click
    const handleOpen = () => {
        const bounds = cardRef.current.getBoundingClientRect();
        setCardBounds(bounds);
        setOpen(true);
    };

    // Compute initial animation values from card's position
    const initial = cardBounds
        ? {
            top: cardBounds.top,
            left: cardBounds.left,
            width: cardBounds.width,
            height: cardBounds.height,
            position: 'fixed',
        }
        : {};


    return (
        <Grid item key={index} size={colWidth} sx={{aspectRatio: '1'}}>
           {/* <Link href={content.link} underline='none'> */}
                <Card
                 ref={cardRef}
                component={motion.div}
                onClick={handleOpen}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                sx={{
                    aspectRatio: '1', 
                    cursor: 'pointer',
                    backgroundColor: 'var(--background-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
                >
                    <Stack direction="column" spacing={1} sx={{ alignItems: 'center', bottom: 0, position: 'absolute', p: 1}}>
                        <CardMedia
                            component="img"
                            sx={{ width: '70%', aspectRatio: '1 / 1', objectFit: 'contain'}}
                            image= {content.img[0]}
                            alt={content.cardTitle}
                        />
                        <CardContent
                            sx={{ width: '100%' }}>
                            <Typography textAlign="center" level="h1" 
                                sx={{
                                    fontWeight: 'lg',
                                    color: 'var(--primary-text)',
                                }}
                            >
                            {content.cardTitle}
                            </Typography>
                        </CardContent>
                    </Stack>
                </Card>
                <AnimatePresence>
                {open && cardBounds && (
                <Dialog open fullScreen onClose={() => setOpen(false)} PaperProps={{ sx: { m: 0, p: 0, background: 'transparent', boxShadow: 'none' } }}>
                    <MotionBox
                    initial={initial}
                    animate={{
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        borderRadius: 0,
                    }}
                    exit={initial}
                    transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                    sx={{
                        backgroundColor: 'white',
                        position: 'fixed',
                        zIndex: 1300, // MUI's dialog z-index
                    }}
                    >
                    <Box sx={{ p: 4 }}>
                        <Typography variant="h4">Expanded Content</Typography>
                        <Typography paragraph>This is the full screen version of the card.</Typography>
                        <Box sx={{ mt: 4 }}>
                        <Typography
                            variant="button"
                            sx={{ cursor: 'pointer', color: 'primary.main' }}
                            onClick={() => setOpen(false)}
                        >
                            Close
                        </Typography>
                        </Box>
                    </Box>
                    </MotionBox>
                </Dialog>
                )}
            </AnimatePresence>
            {/* </Link> */}
        </Grid>
        
    );
}