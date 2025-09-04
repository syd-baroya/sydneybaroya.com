import HobbiesBox from "@/components/hobbiesBox";
import { Stack, Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
export default function About({}) {
    
    return (
        <Stack id="about" sx={{ width: "100%", minHeight: "94vh", paddingTop: "15vh", paddingBottom: "5%", background: "var(--background-color)", zIndex: 10, position: "relative", boxShadow: "0px 70px 60px rgba(0, 0, 0, 0.5)", justifyContent: "space-evenly", alignItems: "center"}}>
            <Typography textAlign="center" fontSize="64px" sx={{ color: 'var(--primary-text)'}}>Hi! I'm Sydney.</Typography>
            <Grid container spacing={8} sx={{ width: "100%", height: "100%", alignItems: "center", px: 6 }}>
                <Grid item xs={12} lg={4}>
                    <Stack spacing={5} direction={{xs: "column", md: "row", lg: "column"}} sx={{ justifyContent: "space-evenly", alignItems: "center"}}>
                        <Box sx={{ display: "flex", justifyContent: "center"}}>
                            <Box sx={{ display: "flex", justifyContent: "center"}}>
                                <Box sx={{
                                    width: { xs: 200, lg: 300 },
                                    height: { xs: 200, lg: 300 },
                                }}>
                                    <Image
                                        src="/images/headshot.JPG"
                                        alt="Profile"
                                        width={300}
                                        height={300}
                                        style={{ borderRadius: '50%', objectFit: 'cover' }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                        <HobbiesBox />
                    </Stack>
                </Grid>
                
                <Grid item xs={12} lg={8}>
                    <Stack spacing={5} direction="column" sx={{ justifyContent: "space-evenly", alignItems: "center"}}>
                            <Typography textAlign="justify" fontSize="20px" sx={{ color: 'var(--primary-text)'}}>
                                A software engineer with a passion for computer graphics, real-time visualization, and interactive 3D experiences.
                            </Typography>
                            <Typography textAlign="justify" fontSize="20px" sx={{ color: 'var(--primary-text)'}}>
                                For the past 5 years, I’ve worked at <a href="https://caci.com/" target="_blank" rel="noopener noreferrer">CACI</a>, where I specialize in 3D web graphics, real-time simulations, and mission-critical visualization tools, using ThreeJS and Vue.
                                In this role, I've led a team dedicated to enhancing our 3D software and provided technical support during critical space launches for both SpaceX and ULA.
                            </Typography>
                            <Typography textAlign="justify" fontSize="20px" sx={{ color: 'var(--primary-text)'}}>
                                At California Polytechnic State University, I completed a B.S. in Software Engineering and a M.S. in Computer Science, where I focused on 3D computer graphics.
                                I worked on projects such as a <Link href="/work/projects/2d-ray-tracer">2D ray tracer</Link> and <Link href="/work/projects/eye-of-metamorphosis">Real-time Body Tracking and Projection Mapping in the Interactive Arts</Link> (my thesis project). 
                                The latter project was presented at Burning Man 2019 and Delfines 2020.
                                My research included projection mapping, point-cloud maps, and parallel compute shader techniques. 
                            </Typography>
                            <Typography textAlign="justify" fontSize="20px" sx={{ color: 'var(--primary-text)'}}>
                                Outside of work, you’ll often find me surfing or snowboarding, enjoying the outdoors. 
                                On quieter days, I’m in the kitchen experimenting with new baking and cooking recipes, tending to my garden, or curled up with a good book/tv show.
                            </Typography>
                    </Stack>
                </Grid>

            </Grid>
        </Stack>
  );
}
