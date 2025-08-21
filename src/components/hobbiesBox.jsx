import { Box, Grid, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function HobbiesBox() {
  return (
    <Box
      sx={{
        width: 400,
        height: 300,
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
                width: { xs: 80, lg: 100 },
                height: { xs: 80, lg: 100 },
                borderRadius: '15px',
                overflow: 'hidden',
              }}>
                <Image src="/images/surf.jpg" alt="hobby 1" width={100} height={100} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h4">{'\u{1F3C2}\u{1F3FE}'}</Typography>
            <Box sx={{
                width: { xs: 80, lg: 100 },
                height: { xs: 80, lg: 100 },
                borderRadius: '15px',
                overflow: 'hidden'
              }}>
                <Image src="/images/snow.jpg" alt="hobby 2" width={100} height={100} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h4">{'\u{1F372}'}</Typography>
            <Link href="https://butternutbakeryblog.com/chocolate-chip-banana-bread/">
              <Typography sx={{
                textDecoration: 'underline',
                '&:hover': {
                  fontWeight: 'medium',
                },
              }}>
                Favorite Banana Bread Recipe
              </Typography>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h4">{'\u{1F4D6}'}</Typography>
            <Link href="https://www.goodreads.com/syd_bar">
                <Typography
                  sx={{
                    textDecoration: 'underline',
                    '&:hover': {
                      fontWeight: 'medium',
                    },
                  }}>
                  GoodReads Profile
                </Typography>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
