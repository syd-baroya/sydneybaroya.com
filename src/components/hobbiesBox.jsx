import { Box, Grid, Typography, Stack } from '@mui/material';
import Image from 'next/image';


export default function HobbiesBox() {
  return (
    <Box
      sx={{
        width: 400,
        height: 350,
        borderRadius: '15px',
        backgroundColor: 'var(--primary-text)',
        padding: 2,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid container spacing={2} sx={{ height: '100%', color: 'var(--background-color)', alignItems: 'start', justifyContent: 'center' }}>
        <Grid item xs={6}>
          <Stack sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h4">{'\u{1F3C4}\u{1F3FD}\u{200D}\u{2640}\u{FE0F}'}</Typography>
              <Box sx={{
                width: 150,
                height: 150,
                borderRadius: '15px',
                overflow: 'hidden',
              }}>
                <Image src="/images/surf.jpg" alt="hobby 1" width={300} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h4">{'\u{1F3C2}\u{1F3FE}'}</Typography>
            <Box sx={{
                width: 150,
                height: 150,
                borderRadius: '15px',
                overflow: 'hidden'
              }}>
                <Image src="/images/snow.jpg" alt="hobby 2" width={300} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h4">{'\u{1F372}'}</Typography>
            <a href="https://butternutbakeryblog.com/chocolate-chip-banana-bread/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography sx={{
                textDecoration: 'underline',
                '&:hover': {
                  fontWeight: 'medium',
                },
              }}>
                Favorite Banana Bread Recipe
              </Typography>
            </a>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h4">{'\u{1F4D6}'}</Typography>
            <a href="https://www.goodreads.com/syd_bar" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography
                  sx={{
                    textDecoration: 'underline',
                    '&:hover': {
                      fontWeight: 'medium',
                    },
                  }}>
                  GoodReads Profile
                </Typography>
            </a>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
