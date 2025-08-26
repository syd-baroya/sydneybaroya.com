import Image from 'next/image';
import { Typography, Box, Stack } from '@mui/material';

export default function MdxImage({ src, alt, caption, ...props }) {

  return (
    <Stack direction="column" sx={{ justifyContent: "center", alignItems: "center"}}>
        <Box sx={{
            width: {xs: '100%', sm: '500px', lg: '800px'}, // Always 100% width
            height: {xs: '300px', lg: '400px'},
            position: 'relative', // Required for fill
        }}>
            <Image
                src={src}
                alt={alt}
                fill // Image fills the Box
                style={{ borderRadius: '15px', objectFit: 'cover' }} // Use 'cover' to fill the space, 'contain' to show full image
                {...props}
            />
        </Box>
        {caption && (
        <Typography variant="caption" display="block" sx={{ textAlign: 'center', mt: 1 }}>
          {caption}
        </Typography>
      )}
    </Stack>
  );
}
