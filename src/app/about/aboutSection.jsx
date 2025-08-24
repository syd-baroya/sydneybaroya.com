import Magnetic from "@/components/animations/Magnetic";
import { Typography, Stack, Button, Box } from "@mui/material";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOctagon } from '@fortawesome/free-solid-svg-icons';
export default function AboutSection() {

    return (
        <Stack
            className="section"
            id="aboutSection"
            direction='row'
            spacing={10}
            sx={{alignItems: 'center', justifyContent: 'space-evenly', width: '100%', minHeight: '40vh'}}
        >
            <Stack direction="column" spacing={5} sx={{ justifyContent: 'center', width: '50%', padding: '0% 2%'}}>
                <Typography textAlign="justify" fontSize="24px" sx={{ color: 'var(--primary-text)'}} >
                Hi, my name is Sydney! I am a software engineer specializing in real-time 3D web graphics, immersive visualization, and interactive experiences.
                </Typography>
                <Typography textAlign="justify" fontSize="24px" sx={{ color: 'var(--primary-text)'}} >
                My work bridges art and technology, from large-scale projection-mapped art installations at Burning Man to cutting-edge aerospace visualization systems.
                </Typography>
            </Stack>

            <Stack direction="column" spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', width: '30%', padding: '0% 2%'}}>
                <Typography textAlign="justify" fontSize="18px" sx={{ color: 'var(--primary-text)'}} >
                    Currently working at CACI designing rocket launch information dissemination 3D displays.
                </Typography>
                <Link href="/about">
                    <Magnetic>
                        <Button
                        sx={{
                            cursor: 'pointer',
                            bgcolor: "rgba(0, 0, 0, 0)",
                            ":hover": {
                                bgcolor: "rgba(0, 0, 0, 0)",
                            },
                            color: 'var(--primary-text)',
                            position: 'relative', // Make IconButton a positioning context
                            display: 'flex', // Use flexbox for centering
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100px', // Give it a defined size
                            height: '100px', // Give it a defined size
                            textTransform: 'none',
                        }} >
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '7rem' }}>
                            <FontAwesomeIcon style={{ rotate: '20deg', position: 'absolute', zIndex: 1}} icon={faOctagon} /> 
                            <Typography textAlign={"center"} variant="body2" sx={{ fontWeight: 'bold', color: 'var(--background-color)', position: 'relative', zIndex: 2 }}>
                                About Me
                            </Typography>
                        </Box>
                    </Button>
                    </Magnetic>
                </Link>
            </Stack>
        </Stack>
    );
}