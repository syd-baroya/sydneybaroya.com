'use client';

import { useRouter } from 'next/navigation';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import ExpandingCard from '@/components/animations/expandingCard';
import { AnimatePresence } from 'framer-motion';
import { LayoutGroup } from 'framer-motion';
import styles from '@/styles/work.module.css';

export default function ProjectSection({ projects, children }) {
    const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
    const router = useRouter();

    const handleCardClick = (slug) => {
        router.push(`/work/projects/${slug}`);
    };
    
    return (
        <LayoutGroup>
            <Stack id="projects" className={styles.workSection}>
                <Stack>
                    <Stack spacing={1}>
                        <Divider />
                        <Divider />
                    </Stack>
                    <Typography textAlign='center' sx={{color: 'var(--primary-text)'}}>Projects</Typography>
                    <Divider />
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
                </Stack>
                {children}
            </Stack>
        </LayoutGroup>
    );
}
