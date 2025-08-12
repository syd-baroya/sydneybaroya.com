'use client';

import { useState, useEffect } from "react";
import { Typography, Stack, Box } from "@mui/material";
import time from "@/lib/threejs/utils/Time.js";
import Contact from "./contact/Contact";

export default function Footer() {
    const [timeNow, setTimeNow] = useState(new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles"
}));

    useEffect(() => {
        time.on('tick.footer', () => {
            setTimeNow(new Date(time.current).toLocaleString("en-US", {
    timeZone: "America/Los_Angeles"
}));
        })
    })
    
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
                    component="img"
                    src="/images/headshot.JPG"
                    alt="Profile"
                    sx={{
                        width: '25%',
                        aspectRatio: '1 / 1',
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }}
                />
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