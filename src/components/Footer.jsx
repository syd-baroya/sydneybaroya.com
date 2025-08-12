'use client';

import { useState, useEffect, useRef } from "react";
import { Typography, Stack, Box, IconButton } from "@mui/material";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import time from "@/lib/threejs/utils/Time.js";
import Contact from "./contact/Contact";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
export default function Footer() {
    const [timeNow, setTimeNow] = useState('');

    const buttonRef = useRef(null);
    const footerRef = useRef(null); // New ref for the footer
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 100, damping: 10, mass: 0.5 };
    const magneticX = useSpring(x, springConfig);
    const magneticY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const offsetX = clientX - centerX;
        const offsetY = clientY - centerY;

        x.set(offsetX * 0.2); // Adjust multiplier for stronger/weaker effect
        y.set(offsetY * 0.2); // Adjust multiplier for stronger/weaker effect
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ['start end', 'end start'] // Adjust offset as needed
    });

    const iconRotate = useTransform(scrollYProgress, [0, 1], [0, 540]); // Rotate 0 to 360 degrees

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
                <Box
                    sx={{
                        width: {lg:'80%', xs: '70%', md: '50%'},
                        aspectRatio: '1 / 1',
                        borderRadius: '50%',
                        overflow: 'hidden', // Crucial for borderRadius to work with Image fill
                        position: 'relative', // Crucial for Image fill
                    }}
                >
                    <Image
                        src="/images/headshot.JPG"
                        alt="Profile"
                        layout="fill"
                        objectFit="cover"
                    />
                </Box>
                <Typography sx={{ textAlign:{lg: 'start', xs: 'center'}, color: 'var(--background-color)', typography: {lg: 'body1', xs: 'body2'}}}>
                    Real-time 3D Visualization | Front-end Developer |
                    Merging Art with Technology
                </Typography>
                {/* <Box sx={{width: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center'}}> */}
                    <IconButton ref={buttonRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        component={motion.div}
                        style={{ x: magneticX, y: magneticY }}
                        sx={{
                            cursor: 'pointer',
                            bgcolor: "var(--primary-text)",
                            color: 'var(--background-color)',
                            ":hover": {
                                color: "var(--secondary-text)",
                            },
                            position: 'relative', // Make IconButton a positioning context
                            display: 'flex', // Use flexbox for centering
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100px', // Give it a defined size
                            height: '100px', // Give it a defined size
                        }} >
                        <motion.div style={{ position: 'absolute', zIndex: 1, rotate: iconRotate }}>
                        <Box sx={{ fontSize: { xs: '5rem', lg: '6rem' } }}>
                            <FontAwesomeIcon icon="fa-solid fa-octagon" /> 
                        </Box>
                    </motion.div> 
                        <Typography sx={{ color: 'var(--primary-text)', position: 'relative', zIndex: 2, typography: {lg: 'body1', xs: 'body2'} }}>
                            Contact Me
                        </Typography>
                    </IconButton>
                {/* </Box> */}
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