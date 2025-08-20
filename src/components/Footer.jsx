'use client';

import { useState, useEffect, useRef } from "react";
import { Typography, Stack, Box, Button } from "@mui/material";
import time from "@/lib/threejs/utils/Time.js";
import Contact from "./contact/Contact";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Magnetic from "@/components/animations/Magnetic.jsx";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
export default function Footer() {
    const [timeNow, setTimeNow] = useState('');
    const footerRef = useRef(null); // New ref for the footer

    useEffect(() => {
        // Set initial time after component mounts on the client
        setTimeNow(new Date().toLocaleString("en-US", {
            timeZone: "America/Los_Angeles"
        }));

        time.on('tick.footer', () => {
            setTimeNow(new Date(time.current).toLocaleString("en-US", {
                timeZone: "America/Los_Angeles"
            }));
        });

        // Cleanup function for the event listener
        return () => {
            time.off('tick.footer');
        };
    }, []);
    
    return (
        <Stack
            ref={footerRef} // Attach footerRef here
            component="footer"
            className="section"
            id="footer"
            spacing={3}
            direction="row"
            col={12}
            sx={{ 
                justifyContent: 'center', 
                alignItems: 'center', 
                padding: '40px', 
                minHeight: '300px',
                backgroundColor: 'var(--primary-text)', 
                borderTop: '1px solid var(--background-color)',
                width: '100%',
                borderRadius: '0% 0% 50px 50px'
            }}
        >
            <Stack md={6} direction={{xs: 'column', lg: 'row'}} spacing={2} style={{width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                <Image
                    src="/images/headshot.JPG"
                    alt="Profile"
                    width={100}
                    height={100}
                    style={{ borderRadius: '50%', aspectRatio: '1 / 1', objectFit: 'cover' }}
                />
                <Typography sx={{ textAlign:{lg: 'start', xs: 'center'}, color: 'var(--background-color)', typography: {lg: 'body1', xs: 'body2'}}}>
                    Real-time 3D Visualization | Front-end Developer |
                    Merging Art with Technology
                </Typography>
                <Magnetic>
                    <Button
                        sx={{
                            cursor: 'pointer',
                            bgcolor: "rgba(0, 0, 0, 0)",
                            color: 'var(--background-color)',
                            ":hover": {
                                color: "var(--secondary-text)",
                                bgcolor: "rgba(0, 0, 0, 0)",
                            },
                            position: 'relative', // Make IconButton a positioning context
                            display: 'flex', // Use flexbox for centering
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100px', // Give it a defined size
                            height: '100px', // Give it a defined size
                            textTransform: 'none',
                        }} >
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '7rem' }}>
                            <FontAwesomeIcon style={{ rotate: '20deg', position: 'absolute', zIndex: 1}} icon="fa fa-octagon" /> 
                            <Typography textAlign={"center"} variant="body2" sx={{ fontWeight: 'bold', color: 'var(--primary-text)', position: 'relative', zIndex: 2 }}>
                                Contact Me
                            </Typography>
                        </Box>
                    </Button>
                </Magnetic>
            </Stack>
            
            <Stack md={6} col={12} direction="column" style={{width: '100%', justifyContent: 'space-around', alignItems: 'end'}}>
                <Typography variant="body2" sx={{ color: 'var(--background-color)' }}>2025 © Edition</Typography>
            
                <Typography variant="body2" sx={{ color: 'var(--background-color)' }}>                
                    {timeNow} PST
                </Typography>
            
                <Contact size="small" primaryColor={"var(--secondary-text)"} secondaryColor={"var(--primary-text)"}/>
            </Stack>
        </Stack>
    );
}