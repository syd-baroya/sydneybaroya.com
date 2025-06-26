'use client';
import { Dialog, Box, Typography } from '@mui/material';

export default function ProjectModal({ project, onClose }) {
  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="md">
      <Box p={4}>
        <Typography variant="h4">{project.cardTitle}</Typography>
        <img src={project.img[0]} alt={project.cardTitle} style={{ width: '100%' }} />
        <Typography>{project.info}</Typography>
      </Box>
    </Dialog>
  );
}


            //     <AnimatePresence>
            //     {open && cardBounds && (
            //     <Dialog open fullScreen onClose={() => setOpen(false)} PaperProps={{ sx: { m: 0, p: 0, background: 'transparent', boxShadow: 'none' } }}>
            //         <MotionBox
            //         initial={initial}
            //         animate={{
            //             top: 0,
            //             left: 0,
            //             width: '100vw',
            //             height: '100vh',
            //             borderRadius: 0,
            //         }}
            //         exit={initial}
            //         transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            //         sx={{
            //             backgroundColor: 'white',
            //             position: 'fixed',
            //             zIndex: 1300, // MUI's dialog z-index
            //         }}
            //         >
            //         <Box sx={{ p: 4 }}>
            //             <Typography variant="h4">Expanded Content</Typography>
            //             <Typography paragraph>This is the full screen version of the card.</Typography>
            //             <Box sx={{ mt: 4 }}>
            //             <Typography
            //                 variant="button"
            //                 sx={{ cursor: 'pointer', color: 'primary.main' }}
            //                 onClick={() => setOpen(false)}
            //             >
            //                 Close
            //             </Typography>
            //             </Box>
            //         </Box>
            //         </MotionBox>
            //     </Dialog>
            //     )}
            // </AnimatePresence>
