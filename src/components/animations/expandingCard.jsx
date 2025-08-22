'use client';

import { Typography, Card, CardContent, CardMedia, Stack, Dialog, Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useActiveCard } from "@/lib/hooks/useActiveCard";
import { useState } from "react";

export default function ExpandingCard({ content, onClick }) {

    const { activeSlug } = useActiveCard();
    const isActive = activeSlug === content.slug;
    const [isAnimating, setIsAnimating] = useState(false);

  return (
        <Card
            onClick={onClick}
            component={motion.div}
            layoutId={`card-${content.slug}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95}}
            initial={isActive ? { scale: 1.5, opacity: 0 } : { } }
            animate={isActive ? { scale: 1, opacity: 1 } : { opacity: 1, scale: 1 } }
            exit={isActive ? { scale: 1.5, opacity: 0 } : {  }}
            transition={{ duration: 0.4 }}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
            sx={{
                aspectRatio: "1",
                cursor: "pointer",
                backgroundColor: "var(--background-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: isActive || isAnimating ? 1301 : 1,
            }}
        >
            <Stack direction="column" spacing={1} sx={{ alignItems: "center", bottom: 0, position: "absolute", p: 1 }}>
            <CardMedia
                component="img"
                sx={{ width: "70%", aspectRatio: "1", objectFit: "contain" }}
                image={`/images/${content.thumbnail}`}
                alt={content.title}
            />
            <CardContent sx={{ width: "100%" }}>
                <Typography textAlign="center" sx={{ fontWeight: "lg", color: "var(--primary-text)" }}>
                {content.title}
                </Typography>
            </CardContent>
            </Stack>
        </Card>
    
  );
}
