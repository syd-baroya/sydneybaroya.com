'use client';

import { Divider, Box, Grid, Stack, Typography} from "@mui/material";
import ExpandingCard from "@/components/animations/expandingCard.jsx";
import PROJECT_CARDS from "@/data/projectCards.jsx";
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ProjectModal from '@/components/animations/ProjectModal';

export default function Project() {
    const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
    const slug = useSelectedLayoutSegment(); // Detect if modal route is active
    const router = useRouter();
    const selectedProject = PROJECT_CARDS.find((p) => p.slug === slug);
    return ( 
        <>
            <Stack id="projects" className="workSection">
                <Stack spacing={1}>
                    <Divider />
                    <Divider />
                </Stack>
                <Typography textAlign='center' sx={{color: 'var(--primary-text)'}}>Projects</Typography>
                <Divider />
                <Box sx={{ flexGrow: 1, m: 1 }}>
                    <Grid container spacing={4} sx={{ display: "flex", alignItems: "center"}} >
                        {PROJECT_CARDS.map((project, index) => (
                            <Grid item size={colWidth} key={project.slug}>
                                <Link href={`/work/projects/${project.slug}`} style={{ textDecoration: 'none' }}>
                                    <ExpandingCard key={index} content={project}></ExpandingCard>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Stack>
            {selectedProject && (
                <ProjectModal
                project={selectedProject}
                onClose={() => router.push('/projects')}
                />
            )}
        </>
    );
}