import { Grid, Box, Card, CardCover, CardContent, Typography, Link, Modal, ModalDialog, DialogTitle, DialogContent, AspectRatio } from "@mui/joy";

import PROJECT_CARDS from "./projectCards.jsx";
import { useState } from 'react';

export default function Project() {

    const NUM_PROJECTS = PROJECT_CARDS.length;
    const [openCardIndex, setOpenCardIndex] = useState(null);

    return (
        <Grid container className="section" id="projects" spacing={2} columns={12} direction="column" sx={{ justifyContent: "center", alignItems: "center", width: "100%"}}>
            <Grid xs={12} lg={9}>
                <Typography textAlign="end" fontSize="64px" sx={{ color: 'var(--primary-text)'}}>Projects</Typography>
            </Grid>
            <Grid container xs={12} lg={9} spacing={2} columns={12} direction="row" sx={{ justifyContent: "center", alignItems: "center", width: "100%"}}>
                { PROJECT_CARDS.map( (project, index) =>  
                    <Grid key={index} xs={12} md={12/NUM_PROJECTS}>                                    
                        <Box >
                            <Card
                                orientation="vertical"
                                sx={{
                                [`& > *`]: {
                                    '--stack-point': '500px',
                                    minWidth:
                                    'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
                                },
                                minHeight: 200,
                                // border: "solid 2px",
                                // borderColor: HOBBIES_SECTION.color,
                                borderRadius: '15px'
                                }}
                            >
                                <CardCover>
                                    <img src={project.media} alt=""/>
                                </CardCover>
                                <CardContent>
                                    <Link
                                        overlay
                                        component="button"
                                        onClick={() => {setOpenCardIndex(index)}}
                                        underline="none"
                                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}
                                    >
                                        <Typography level="h3" sx={{ color: 'white', fontWeight: 'lg', mt: { xs: 24, sm: 30 } }}>{project.title}</Typography>
                                    </Link>
                                </CardContent>
                            </Card>
                            <Modal open={openCardIndex===index} onClose={() => setOpenCardIndex(null)}>
                                <ModalDialog>
                                    <AspectRatio ratio="4/3">
                                        <img src={project.media} alt=""/>
                                    </AspectRatio>
                                    <DialogTitle>{project.title}</DialogTitle>
                                    <DialogContent>{project.info}</DialogContent>
                                </ModalDialog>
                            </Modal>
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
}