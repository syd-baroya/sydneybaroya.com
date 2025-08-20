import AboutSection from "./aboutSection";
import { Stack, Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
export default function About({}) {
    
    return (
        <Stack id="about" sx={{ width: "100%", minHeight: "94vh", paddingTop: "15vh", paddingBottom: "5%", background: "var(--background-color)", zIndex: 10, position: "relative", boxShadow: "0px 70px 60px rgba(0, 0, 0, 0.5)", justifyContent: "space-evenly", alignItems: "center"}}>
            <Typography textAlign="center" fontSize="64px" sx={{ color: 'var(--primary-text)'}}>Hi! I'm Sydney.</Typography>
            <Stack spacing={6} direction={{ xs: "column", md: "row"}} sx={{ width: "100%", height: "100%", alignItems: "center", px: 4 }}>
                <Box xs={12} md={6} sx={{ display: "flex", justifyContent: "center"}}>
                    <Box 
                        sx={{
                            width: '300px',
                            aspectRatio: '1 / 1',
                            borderRadius: '50%',
                            overflow: 'hidden', // Crucial for borderRadius to work with Image fill
                            position: 'relative', // Crucial for Image fill
                        }}
                    >
                        <Image
                            src="/images/headshot.JPG"
                            alt="Profile"
                            layout="fill"
                            objectFit="cover"
                        />
                    </Box>
                </Box>
                
                <Stack xs={12} md={6} spacing={5} direction="column" sx={{ justifyContent: "space-evenly", alignItems: "center"}}>
                    {/* <Box component={Grid} xs={12} md={6} sx={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}> */}
                        <Typography textAlign="justify" fontSize="24px" sx={{ color: 'var(--primary-text)'}}>Hi, my name is Sydney! I am a software engineer specializing in real-time 3D web graphics, immersive visualization, and interactive experiences.</Typography>
                        <Typography textAlign="justify" fontSize="24px" sx={{ color: 'var(--primary-text)'}}>Hi, my name is Sydney! I am a software engineer specializing in real-time 3D web graphics, immersive visualization, and interactive experiences.</Typography>
                        <Typography textAlign="justify" fontSize="24px" sx={{ color: 'var(--primary-text)'}}>Hi, my name is Sydney! I am a software engineer specializing in real-time 3D web graphics, immersive visualization, and interactive experiences.</Typography>

                    {/* </Box> */}
                </Stack>
            </Stack>
        </Stack>
  );
}