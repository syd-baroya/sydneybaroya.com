import Magnetic from "@/components/animations/Magnetic";
import { Typography, Stack, Button, Box } from "@mui/material";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOctagon } from '@fortawesome/free-solid-svg-icons';
export default function AboutSection() {

    return (
        <Stack
            id="aboutSection"
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            sx={{alignItems: 'baseline', justifyContent: 'space-evenly', width: '100%'}}
        >
            <Stack direction="column" spacing={3} sx={{ justifyContent: 'center', width: {xs: '100%', md: '60%', lg: '50%'}, padding: '0% 2%'}}>
                <Typography textAlign="justify" fontSize="24px" sx={{ color: 'var(--primary-text)'}} >
                Hi, my name is Sydney! I am a software engineer specializing in real-time 3D web graphics, bridging between art and technology, from large-scale projection-mapped art installations at <b>Burning Man</b> to cutting-edge <b>aerospace visualization systems</b>.
                </Typography>
            </Stack>

            <Stack direction={{xs: 'row', md: 'column'}} spacing={2} sx={{ justifyContent: { xs: 'space-evenly', md: 'center'}, alignItems: 'center', width: {xs: '100%', md: '35%'}, padding: '0% 2%'}}>
                <Typography textAlign="justify" fontSize="18px" sx={{ color: 'var(--primary-text)', width: {xs: '50%', md: '75%'}}} >
                    Currently working at CACI designing rocket launch information dissemination 3D displays.
                </Typography>
                <Link href="/about">
                    <Magnetic>
                        <Box sx={{ cursor: 'pointer',
                            bgcolor: "rgba(0, 0, 0, 0)",
                            ":hover": {
                                bgcolor: "rgba(0, 0, 0, 0)",
                                color: "var(--secondary-text)"
                            },
                            color: 'var(--primary-text)',
                            position: 'relative', // Make IconButton a positioning context
                            display: 'flex', // Use flexbox for centering
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100px', // Give it a defined size
                            height: '100px', // Give it a defined size
                            textTransform: 'none', 
                            display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '7rem' }}>
                            <FontAwesomeIcon style={{ rotate: '20deg', position: 'absolute', zIndex: 1}} icon={faOctagon} /> 
                            <Typography textAlign={"center"} variant="body2" sx={{ fontWeight: 'bold', color: 'var(--background-color)', position: 'relative', zIndex: 2 }}>
                                About Me
                            </Typography>
                        </Box>
                    </Magnetic>
                </Link>
            </Stack>
        </Stack>
    );
}