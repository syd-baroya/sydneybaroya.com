import {Grid, Typography, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle, Button, Card, CardContent, CardMedia } from "@mui/material";

export default function ProjectCard({project, index, open, hovering, playGIF, handleOpen, handleClose, handleHover, colWidth }) {

    return (
        <Grid item key={index} size={colWidth} minHeight={160} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card
            onClick={() => handleOpen(index)}
            onMouseEnter={() => handleHover(true, index)}
            onMouseLeave={() => handleHover(false, null)}
            sx={{
                width: '100%',
                height: '100%',
                cursor: 'pointer',
                transition: '0.3s',
                '&:hover': {
                backgroundColor: 'grey.300',
                boxShadow: 4,
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}
            >
                <CardMedia
                    component="img"
                    width="100%"
                    height="100%"
                    image={(hovering || playGIF) ? project.gif[0] : project.img[0]} // media[0] = static, media[1] = gif
                    alt={project.cardTitle}
                />
                <CardContent
                    sx={{
                    position: 'absolute',
                    width: '100%',
                    bottom: (hovering || playGIF) ? 0 : '50%',
                    transform: (hovering || playGIF) ? 'translateY(0)' : 'translateY(50%)',
                    transition: 'all 0.4s ease',
                    textAlign: 'center',
                    background: (hovering || playGIF) ? 'rgba(0, 0, 0, 0.4)' : 'transparent',
                    }}>
                    <Typography textAlign="center" level="h3" 
                        sx={{
                            fontWeight: 'lg',
                            color: 'white',
                            transition: 'all 0.4s ease',
                        }}
                    >
                    {project.cardTitle}
                    </Typography>
                </CardContent>
            </Card>
            <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>{project.title}</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText>{project.info}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}