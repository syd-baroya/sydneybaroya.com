'use client';

import {Typography, Stack, Box} from "@mui/material";
import '@/styles/globals.css';
import homeStyles from '@/styles/home.module.css';
import SceneViewport from "@/components/Scene/SceneViewport";
import * as HomeScene from "@/lib/scenes/homeScene.js";

export default function LandingSection({}) {
    return (
       <Stack id="home" direction={{ xs: 'column', md: 'row' }} 
            className={homeStyles.homeSectionStack}
            sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '100%', height: {xs: '20vh', md: '60vh'}, display: 'flex', flexDirection: 'column', justifyContent: 'center',}}>
                <Typography textAlign="center" variant='h2' sx={{ color: 'var(--primary-text)',
                    fontSize: {
                        xs: 'clamp(1.5rem, 5vh, 4rem)',
                        md: 'clamp(2rem, 6vh, 4rem)',
                }}}>Sydney's</Typography>
                <Typography textAlign="center" variant='h1' sx={{ color: 'var(--primary-text)',
                    textTransform: 'uppercase',
                    fontSize: {
                        xs: 'clamp(2rem, 7vh, 5rem)',
                        md: 'clamp(3rem, 9vh, 6rem)',
                    }}}>Portfolio</Typography>
            </Box>
            <Box sx={{ width: '100%', height: {xs: '45vh', md: '60vh'}, cursor: { sm: 'grab'}, '&:active': {cursor: {sm: 'grabbing'}}}}>
                <div id="homeSceneGUI" style={{zIndex: 1000, position: 'absolute'}}></div>
                <Box id="scrollOverScene" sx={{zIndex: 1000, position: 'absolute', width: '100%', height: 'inherit', display: {xs: 'block', sm: 'none'}}}></Box>
                <SceneViewport className="view" index={0} scene={HomeScene}></SceneViewport>
            </Box>
        </Stack>
  );
}
