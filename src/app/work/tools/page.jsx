'use client';

import { FormControl, InputLabel, Select, MenuItem, Grid, Stack, Divider, Typography, List, ListItem, ListItemText, ListItemButton, Box } from "@mui/material";
import SceneViewport from "@/components/Scene/SceneViewport";
import { useState } from "react";
import * as ToolsScene from "@/lib/scenes/ToolsScene.js";

export default function Tools() {
    const toolOptions = ['Item 1', 'Item 2', 'Item 3'];
    const [toolSelected, setToolSelected] = useState(0);

    const handleChange = (event, index) => {
        if(index!==null) {
            setToolSelected(index);
        } else {
            setToolSelected(event.target.value);
        }
    };

    return (
        <Stack id="tools" className="workSection">
            {/* Header */}
            <Stack spacing={1}>
                <Divider />
                <Divider />
            </Stack>
            <Typography textAlign="center" sx={{ color: 'var(--primary-text)' }}>
                Tools
            </Typography>

            {/* Grid Layout */}
            <Grid container direction="row" sx={(theme) => ({
                    '--Grid-borderWidth': '1px',
                    borderTop: 'var(--Grid-borderWidth) solid',
                    borderColor: 'divider',
                    width: '100%'})}>
                
                {/* Left column - visible md and up only */}
                <Grid
                container
                direction="column" 
                size={4}
                sx={{display: { xs: 'none', md: 'block' }}}
                >
                <Box sx={{ height: '100%', color: 'var(--primary-text)', display: 'flex', '& > *': { m: 1 },}}>
                    <List disablePadding sx={{width: '100%'}}>
                    {toolOptions.map((text, index) => (
                        <Box key={'list'+text+index}>
                            <ListItem disablePadding>
                                <ListItemButton selected={toolSelected===index} onClick={(e) => { handleChange(e, index); }}>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                             <Divider component="li" />
                        </Box>
                    ))}
                    </List>
                    {/* <ButtonGroup orientation="vertical" aria-label="Vertical button group">
                        {toolOptions.map((text, index) => (
                            <Button key={index} 
                                variant={toolSelected === index ? 'contained' : 'outlined'}
                                color={toolSelected === index ? 'primary' : 'inherit'}
                                onClick={handleChange}
                            >{text}</Button>
                        ))}
                    </ButtonGroup> */}
                </Box>
                </Grid>

                {/* Right column - always visible */}
                <Grid size="grow" sx={{position: 'relative'}}>
                     <FormControl sx={{ m: 5, minWidth: 120, display: { md: 'none' },
                     position: 'absolute', top:0, left:0}} size="small">
                        <InputLabel>Tool</InputLabel>
                        <Select
                            value={toolSelected}
                            label="Tool"
                            onChange={(e) => { handleChange(e, null); }}
                        >
                            {toolOptions.map((text, index) => (
                                 <MenuItem key={'select'+text+index} value={index}>{text}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Box sx={{ width: '100%', height: {xs: '70vh', md: '50vh'}}}>
                        <SceneViewport  className="view" index={1} scene={ToolsScene}></SceneViewport>
                    </Box>
                </Grid>
            </Grid>
            </Stack>

    );
}