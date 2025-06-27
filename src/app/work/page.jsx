'use client';

import { useRouter } from 'next/navigation';
import Tools from "./tools/page";
import { Box, Button, Stack, Typography } from "@mui/material";
import '@/styles/work.module.css';
import ProjectsSection from "./projectsSection";
import PROJECT_CARDS from '@/lib/data/projects';

export default function Work() {
    const router = useRouter();

    // Show only first 6 projects as preview on Work page
    const previewProjects = PROJECT_CARDS.slice(0, 6);
    const showMore = true;//PROJECT_CARDS.length > 6;

    return (
        <Stack className="section" id="work">
            <Typography variant="h1" style={{ color: 'var(--primary-text)'}}>Work</Typography>
            <ProjectsSection projects={previewProjects}>
                {showMore &&
                    <Box sx={{ mt: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button size="small" variant="contained" onClick={() => router.push('/work/projects')}>
                        See More Projects
                        </Button>
                    </Box>
                }
            </ProjectsSection>
            <Tools></Tools>
        </Stack>
    );
}