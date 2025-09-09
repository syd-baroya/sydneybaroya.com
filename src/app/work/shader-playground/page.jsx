'use client';

import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import {SHADER_DATA, SHADER_SCENES} from '@/lib/data/shaders';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import dynamic from 'next/dynamic';



const SceneViewport = dynamic(() => import('@/components/Scene/SceneViewport'), { ssr: false });

export default function ShaderPlayground() {
    const [shaderSelected, setShaderSelected] = useState(SHADER_DATA[0].sceneKey);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleChange = (event, sceneKey) => {
        if (sceneKey !== null && sceneKey !== undefined && sceneKey !== '') {
            setShaderSelected(sceneKey);
        } else {
            setShaderSelected(event.target.value);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setDrawerOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <Stack id="tools" sx={{ position: 'relative', marginTop: '6vh' // for navbar
        }}>
            {/* Header */}
            <Typography variant="h3" gutterBottom sx={{ margin: '8px 20px', color: 'var(--primary-text)'}}>Shader Playground</Typography>
            {/* Container for Scene and Custom Drawer */}
            <Box sx={{ position: 'relative', height: '86vh', overflow: 'hidden' }}>
                
                {/* Scene Viewport */}
                <Box
                    component="main"
                    sx={{ width: '100%', height: '100%' }}
                >
                    <div id="shaderGUI" style={{ zIndex: 1, position: 'absolute', right: 0 }}></div>
                    <SceneViewport className="view" index={1} scene={SHADER_SCENES[shaderSelected]}></SceneViewport>
                </Box>

                {/* Closed Drawer Button */}
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                    sx={{
                        position: 'absolute',
                        zIndex: 3,
                        left: 10,
                        top: 10,
                        width: 30,
                        height: 30,
                        backgroundColor: 'var(--background-color)',
                        opacity: 0.8,
                        borderRadius: '0 8px 8px 0',
                        '&:hover': {
                            opacity: 1,
                        },
                        display: drawerOpen ? 'none' : 'flex',
                    }}
                >
                    <ChevronRightIcon />
                </IconButton>

                {/* Drawer and Open Button Container */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        display: 'flex',
                        alignItems: 'flex-start',
                        zIndex: 2,
                        transform: drawerOpen ? 'translateX(0)' : 'translateX(-100%)',
                        visibility: drawerOpen ? 'visible' : 'hidden',
                        transition: (theme) => theme.transitions.create(['transform', 'visibility'], {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                    }}
                >
                    {/* Custom Drawer */}
                    <Box
                        sx={{
                            height: '100%',
                            width: 240,
                            boxSizing: 'border-box',
                            backgroundColor: 'var(--background-color)',
                            opacity: 0.8,
                            color: 'var(--primary-text)',
                        }}
                    >
                        {/* <Box sx={{ height: 48 }} /> Spacer for the button */}
                        <List>
                            <ListItem >
                                <ListItemText primary="Shaders" primaryTypographyProps={{ fontSize: 20, fontWeight: 'medium', letterSpacing: 0 }} />
                            </ListItem>
                            <Divider />
                            {SHADER_DATA.map((shader, index) => (
                                <ListItem key={shader.sceneKey} disablePadding>
                                    <ListItemButton selected={shaderSelected === shader.sceneKey} onClick={(e) => { handleChange(e, shader.sceneKey); }}>
                                        <ListItemText primary={shader.sceneKey} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    {/* Open Drawer Button */}
                    <IconButton
                        color="inherit"
                        aria-label="close drawer"
                        onClick={handleDrawerToggle}
                        edge="end"
                        sx={{
                            width: 30,
                            height: 30,
                            backgroundColor: 'var(--background-color)',
                            opacity: 0.8,
                            borderRadius: '0 8px 8px 0',
                            '&:hover': {
                                opacity: 1,
                            },
                            mt: '10px',
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>
                </Box>
            </Box>
        </Stack>
    );
}