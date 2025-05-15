import { Box, Grid, Typography, Stack } from "@mui/material";

export default function About() {

    return (
        <Stack
            className="section"
            id="about"
            direction={{ xs: 'column', md: 'row' }} // 👈 Responsive direction
            spacing={2}
            sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
            <Box
                sx={{
                    flexBasis: { xs: '20%', md: '35%' }, // ⬅️ controls size relative to the Stack
                    maxWidth: '400px'
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
            <Typography
                textAlign="center"
                fontSize="18px"
                sx={{ color: 'var(--primary-text)' }}
            >
                Send me an email or check out these links below!
            </Typography>
        </Stack>
    );
}