import {Grid, Typography, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle, Button, Card, CardContent, CardMedia, Stack } from "@mui/material";
import { motion } from 'framer-motion';
export default function ProjectCard({project, index, open, hovering, playGIF, handleOpen, handleClose, handleHover, colWidth }) {

    return (
        <Grid item key={index} size={colWidth} sx={{aspectRatio: '1'}}>
            <Card
            onClick={() => handleOpen(index)}
            onMouseEnter={() => handleHover(true, index)}
            onMouseLeave={() => handleHover(false, null)}
            component={motion.div}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            sx={{
                aspectRatio: '1', 
                cursor: 'pointer',
                // transition: '0.3s',
                // '&:hover': {
                backgroundColor: 'var(--background-color)',
                // boxShadow: 4,
                // },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}
            >
                <Stack direction="column" spacing={1} sx={{ alignItems: 'center', bottom: 0, position: 'absolute', p: 1}}>
                    <CardMedia
                        component="img"
                        sx={{ width: '70%', aspectRatio: '1 / 1', objectFit: 'contain'}}
                        image= {project.img[0]}//{(hovering || playGIF) ? project.gif[0] : project.img[0]} // media[0] = static, media[1] = gif
                        alt={project.cardTitle}
                    />
                    <CardContent
                        sx={{ width: '100%' }}>
                        <Typography textAlign="center" level="h1" 
                            sx={{
                                fontWeight: 'lg',
                                color: 'var(--primary-text)',
                            }}
                        >
                        {project.cardTitle}
                        </Typography>
                    </CardContent>
                </Stack>
            </Card>
        </Grid>
            // <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            //     <DialogTitle>{project.title}</DialogTitle>
            //     <DialogContent dividers>
            //         <DialogContentText>{project.info}</DialogContentText>
            //     </DialogContent>
            //     <DialogActions>
            //         <Button onClick={handleClose} color="primary">
            //             Close
            //         </Button>
            //     </DialogActions>
            // </Dialog>
        
    );
}