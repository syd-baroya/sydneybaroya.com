'use client';

import {Typography, Stack, Box} from "@mui/material";
import '@/styles/globals.css';
import '@/styles/home.module.css';
import SceneViewport from "@/components/Scene/SceneViewport";
import { home } from "@/components/Scene/sceneInfo";

export default function Home({}) {
    return (
       <Stack className="section" id="home" direction={{ xs: 'column', md: 'row' }} // 👈 Responsive direction
            spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '100%', height: {xs: '22vh', md: '83vh'}, display: 'flex', flexDirection: 'column', justifyContent: 'center',}}>
                <Typography textAlign="center" variant='h2' sx={{ color: 'var(--primary-text)',
                    fontSize: {
                        xs: 'clamp(1.5rem, 5vh, 4rem)',
                        md: 'clamp(2rem, 6vh, 4rem)',
                }}}>Sydney Baroya</Typography>
                <Typography textAlign="center" variant='h1' sx={{ color: 'var(--primary-text)',
                    fontSize: {
                        xs: 'clamp(2rem, 7vh, 5rem)',
                        md: 'clamp(3rem, 9vh, 6rem)',
                    }}}>Portfolio</Typography>
            </Box>
            <Box sx={{ width: '100%', height: {xs: '45vh', md: '83vh'}}}>
                <SceneViewport className="view" index={0} sceneInfo={home}></SceneViewport>
            </Box>
        </Stack>
  );
}
