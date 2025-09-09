'use client';

import PROJECT_DATA from '@/lib/data/projects';
import { useRouter } from 'next/navigation';
import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import ExpandingCard from '@/components/animations/ExpandingCard';
import { LayoutGroup } from 'framer-motion';
import styles from '@/styles/work.module.css';

export default function ProjectsPage() {
      const router = useRouter();

    const handleCardClick = (slug) => {
        router.push(`/work/projects/${slug}`);
    };
  return (
    <Stack className='section' id="projects" style={{ minHeight: '94vh', background: 'var(--background-color)', zIndex: 10, position: 'relative', boxShadow: '0px 70px 60px rgba(0, 0, 0, 0.5)' }}>
      <Typography variant="h2" gutterBottom>Projects</Typography>
        <LayoutGroup>
            <Stack id="projects" className={styles.workSection}>
                <Grid container spacing={4} sx={{ display: "flex", alignItems: "center"}} >
                    {PROJECT_DATA.map((project) => {
                        return (
                            <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={project.slug}>
                                <ExpandingCard content={project} 
                                    onClick={() => handleCardClick(project.slug)}>
                                </ExpandingCard>
                            </Grid>
                        );
                    })}
                </Grid>
            </Stack>
        </LayoutGroup>
    </Stack>
  );
}
