import { Divider, Box, Grid, Stack, Typography, Dialog, DialogContent, DialogContentText, DialogActions, DialogTitle, Button, Card, CardContent, CardMedia } from "@mui/material";
import { useState } from "react";
import PROJECT_CARDS from "./projectCards.jsx";


export default function Project() {
    const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
    const projectOptions = ['Item 1', 'Item 2', 'Item 3'];
    const [open, setOpen] = useState(false);
    const [projectSelected, setProjectSelected] = useState(null);

    const handleOpen = (index) => {
        setOpen(true);
        setProjectSelected(index);
    }
    const handleClose = () => {
        setOpen(false);
        setProjectSelected(null);
    }

    return ( 
        <Stack id="projects" className="workSection">
            <Stack spacing={1}>
                <Divider />
                <Divider />
            </Stack>
            <Typography textAlign='center' sx={{color: 'var(--primary-text)'}}>Projects</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    sx={(theme) => ({
                    '--Grid-borderWidth': '1px',
                    borderTop: 'var(--Grid-borderWidth) solid',
                    borderColor: 'divider',
                    '& > div': {
                        borderRight: 'var(--Grid-borderWidth) solid',
                        borderBottom: 'var(--Grid-borderWidth) solid',
                        borderColor: 'divider',
                        ...Object.keys(colWidth).reduce(
                        (result, key) => ({
                            ...result,
                            [`&:nth-of-type(${12 / colWidth[key]}n)`]: {
                            [theme.breakpoints.only(key)]: {
                                borderRight: 'none',
                            },
                            },
                        }),
                        {},
                        ),
                    },
                    })}
                >
                    {PROJECT_CARDS.map((project, index) => (
                    <Grid item key={index} size={colWidth} minHeight={160} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {/* <Box
                            onClick={() => handleOpen(index)}
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
                            }}
                        > */}
                            {/* <Typography sx={{ color: 'var(--primary-text)', fontSize: 14 }}>{text}</Typography> */}
                             <Card
                                onClick={() => handleOpen(index)}
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
                                // position: 'relative'
                                }}
                            >
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia component="img"
                                        width='100%'
                                        height='100%'
                                        image={project.media[0]}
                                        alt="Paella dish">
                                    </CardMedia>
                                    <Box sx={{position: 'absolute', top:0, left:0, width: '100%', height: '100%', color: 'white'}}>
                                        <Typography level="h3" sx={{ fontWeight: 'lg', mt: { xs: 24, sm: 30 }}}>{project.cardTitle}</Typography>
                                    </Box>
                                </Box>
                            </Card>
                        {/* </Box> */}
                         <Dialog open={open && projectSelected===index} onClose={handleClose} maxWidth="sm" fullWidth>
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
                    ))}
                </Grid>
            </Box>
        </Stack>
    );
}