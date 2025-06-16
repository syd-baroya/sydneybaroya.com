import { Divider, Box, Grid, Stack, Typography} from "@mui/material";
import { useState, useEffect } from "react";
import ExpandingCard from "../animations/expandingCard.js";
import PROJECT_CARDS from "./projectCards.js";
import { Routes, Route } from "react-router-dom";


export default function Project() {
    const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };

    return ( 
        <Stack id="projects" className="workSection">
            <Stack spacing={1}>
                <Divider />
                <Divider />
            </Stack>
            <Typography textAlign='center' sx={{color: 'var(--primary-text)'}}>Projects</Typography>
            <Divider />
            <Box sx={{ flexGrow: 1, m: 1 }}>
                <Grid
                    container
                    spacing={4}
                    sx={{ display: "flex", alignItems: "center"}}
                >
                    {PROJECT_CARDS.map((project, index) => (
                        <ExpandingCard
                            key={index}
                            content={project}
                            index={index}
                            colWidth={colWidth}
                        ></ExpandingCard>
                    ))}
                </Grid>
            </Box>
        </Stack>
    );
}