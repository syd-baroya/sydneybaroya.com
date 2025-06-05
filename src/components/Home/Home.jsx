import {Typography, Stack, Box} from "@mui/material";

import '../../style.css';
import './Home.css';

import Scene from "../Scene/Scene.jsx";
import {home} from "../sceneInfo.jsx";

export default function Home() {
    return ( 
        <div className="home">
            <div className="sections">
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
                        <Scene num='1' sceneInfo={home}></Scene>
                    </Box>
                </Stack>
                
            </div>
        </div>
    );
}