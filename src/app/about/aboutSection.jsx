import { Box, Typography, Stack } from "@mui/material";
import Contact from "@/components/contact/Contact";

export default function AboutSection() {

    /**
     * TODO
     * add thesis link
     */
    return (
        <Stack
            className="section"
            id="about"
            direction={{ xs: 'column', md: 'row' }}
            spacing={5}
            sx={{ justifyContent: {xs:'space-around', md: 'space-around'}, alignItems: 'center'}}
        >
            <Box
                xs={4} md={4}
                sx={{
                    // flexBasis: { xs: '20%', md: '35%' }, // ⬅️ controls size relative to the Stack
                    maxWidth: {md: '400px', xs: '350px'},
                }}
            >
                <Box
                    component="img"
                    src="/images/headshot.JPG"
                    alt="Profile"
                    sx={{
                        width: '100%',
                        aspectRatio: '1 / 1',
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }}
                />
            </Box>
            <Stack direction= "column"  xs={6} md={6} spacing={2} sx={{ justifyContent: 'center', maxWidth: '600px'}}>
                <Typography textAlign="justify" fontSize="18px" sx={{ color: 'var(--primary-text)'}} >
                Hi my name is Sydney! I am currently working at CACI as a full-stack web developer, focused in 3D web dev.
                </Typography>
                <Typography textAlign="justify" fontSize="18px" sx={{ color: 'var(--primary-text)'}} >
                I studied at Cal Poly SLO finishing with a MSc in Computer Science, concentrating on 3D computer graphics. My thesis was about real-time AR in the interactive arts space. You can read about it here.
                </Typography>
                <Typography textAlign="justify" fontSize="18px" sx={{ color: 'var(--primary-text)'}} >
                Send me an email if you’d like a resume or to get in touch!
                </Typography>
                <Contact alignSelf="center"></Contact>
            </Stack>
        </Stack>
    );
}