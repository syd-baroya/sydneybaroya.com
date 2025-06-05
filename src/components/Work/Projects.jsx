import { Divider, Box, Grid, Stack, Typography} from "@mui/material";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard.jsx";
import PROJECT_CARDS from "./projectCards.jsx";


export default function Project() {
    const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
    
    const [open, setOpen] = useState(false);
    const [projectSelected, setProjectSelected] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const [projectHovered, setProjectHovered] = useState(null);
    const [activeNonHover, setActiveNonHover] = useState(0);

    const checkHovering = (index) => {
        return isHovered && projectHovered === index;
    }

    const checkPlayGif = (index) => {
        return !projectSelected && !isHovered && activeNonHover === index;
    }

    const checkOpenDialog = (index) => {
        return open && projectSelected===index;
    }

    const handleOpen = (index) => {
        setOpen(true);
        setProjectSelected(index);
    }
    const handleClose = () => {
        setOpen(false);
        setProjectSelected(null);
    }

    const handleHover = (isHovering, index) => {
        setIsHovered(isHovering);
        setProjectHovered(index);
        if(isHovering) { setActiveNonHover(null); }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if(!isHovered) {
                setActiveNonHover((prev) => (prev + 1) % PROJECT_CARDS.length);
            }
        }, 7000); // rotate every 5 seconds

        return () => clearInterval(interval);
    }, [isHovered]);

    return ( 
        <Stack id="projects" className="workSection">
            <Stack spacing={1}>
                <Divider />
                <Divider />
            </Stack>
            <Typography textAlign='center' sx={{color: 'var(--primary-text)'}}>Projects</Typography>
            <Divider />
            <Box sx={{ flexGrow: 1, mt: 1 }}>
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
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            open={checkOpenDialog(index)}
                            hovering={checkHovering(index)}
                            playGIF={checkPlayGif(index)}
                            handleOpen={handleOpen}
                            handleClose={handleClose}
                            handleHover={handleHover}
                            colWidth={colWidth}
                        ></ProjectCard>
                    ))}
                </Grid>
            </Box>
        </Stack>
    );
}