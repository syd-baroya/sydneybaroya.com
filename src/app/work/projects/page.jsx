'use client';

import ProjectSection from '@/app/work/projectsSection';
import PROJECT_CARDS from '@/lib/data/projects';
import {Typography, Stack} from '@mui/material';

export default function ProjectsPage() {
  return (
    <Stack className='section' id="projects" style={{ minHeight: '94vh' }}>
      <Typography variant="h2" gutterBottom>All Projects</Typography>
      <ProjectSection projects={PROJECT_CARDS} />
    </Stack>
  );
}
