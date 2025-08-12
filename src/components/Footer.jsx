'use client';

import { useState, useEffect } from "react";
import { Typography, Stack, Box } from "@mui/material";
import time from "@/lib/threejs/utils/Time.js";
import Contact from "./contact/Contact";
import Image from "next/image";

export default function Footer() {
    const [timeNow, setTimeNow] = useState('');

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
            component="footer"
            className="section"
            id="footer"
            spacing={5}
            direction={{ xs: 'row', md: 'column' }}
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
                <Box
                    sx={{
                        width: '25%',
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
                
                <Stack col={12} direction={{xs: 'column', md: 'row'}} style={{width: '100%', justifyContent: 'space-around', alignItems: 'center'}}>
                    <Stack md={4} direction="column" spacing={1}>
                        <Typography variant="body1" sx={{ color: 'var(--background-color)' }}>
                            Version
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'var(--background-color)' }}>2025 © Edition</Typography>
                    </Stack>
                    <Stack md={4} direction="column" spacing={1}>
                        <Typography variant="body1" sx={{ color: 'var(--background-color)' }}>
                            Timezone
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'var(--background-color)' }}>                
                            {timeNow} PST
                        </Typography>
                    </Stack>
                    <Stack md={4} direction="column" spacing={1}>
                        <Typography variant="body1" sx={{ color: 'var(--background-color)' }}>
                            Socials
                        </Typography>
                        <Contact size="small" primaryColor={"var(--secondary-text)"} secondaryColor={"var(--primary-text)"}/>
                    </Stack>
                </Stack>
        </Stack>
    );
}