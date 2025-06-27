'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import ExpandingCard from '@/components/animations/expandingCard';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { LayoutGroup } from 'framer-motion';
import { useActiveCard } from '@/lib/hooks/useActiveCard';

export default function ProjectSection({ projects, children }) {
    const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
    const router = useRouter();
    const { activeSlug, setActiveSlug } = useActiveCard();

    const handleCardClick = (slug) => {
        setActiveSlug(slug);
        router.push(`/work/projects/${slug}`);
    };
    
    return (
        <Stack>
            <Stack id="projects" className="workSection">
                <Stack spacing={1}>
                    <Divider />
                    <Divider />
                </Stack>
                <Typography textAlign='center' sx={{color: 'var(--primary-text)'}}>Projects</Typography>
                <Divider />
                    <LayoutGroup>
                        <Box sx={{ flexGrow: 1, m: 1 }}>
                            <Grid container spacing={4} sx={{ display: "flex", alignItems: "center"}} >
                                {projects.map((project) => {
                                    return (
                                        <AnimatePresence mode='wait'  key={project.slug}>
                                            <Grid  size={colWidth}>
                                                <ExpandingCard content={project} 
                                                    onClick={() => handleCardClick(project.slug)}>
                                                </ExpandingCard>
                                            </Grid>
                                        </AnimatePresence>
                                    );
                                })}
                            </Grid>
                        </Box>
                    </LayoutGroup>
            </Stack>
            {children}
        </Stack>
    );
}
