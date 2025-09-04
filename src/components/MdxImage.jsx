import Image from 'next/image';
import { Typography, Box, Stack } from '@mui/material';

export default function MdxImage({ src, alt, caption, boxProps,...props }) {

  /**
   * {{width: {xs: '100%', sm: '500px', lg: '800px'}, height: {xs: '300px', lg: '400px'}}} 
   */
  return (
    <Stack direction="column" sx={{ justifyContent: "center", alignItems: "center", marginBottom: 1}}>
        <Box sx={{
            position: 'relative', // Required for fill
          }}
          {...boxProps}
        >
            <Image
                src={src}
                alt={alt}
                fill // Image fills the Box
                style={{ borderRadius: '15px', objectFit: 'cover' }} // Use 'cover' to fill the space, 'contain' to show full image
                {...props}
            />
        </Box>
        {caption && (
        <Typography variant="caption" display="block" sx={{ textAlign: 'center', mt: 1, maxWidth: '50vw' }}>
          {caption}
        </Typography>
      )}
    </Stack>
  );
}
