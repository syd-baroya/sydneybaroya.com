'use client';

import { useState, useEffect, useRef } from "react"
import { Typography, Stack, Box } from "@mui/material";
import time from "@/lib/threejs/utils/Time.js";
import Contact from "./Contact";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOctagon } from '@fortawesome/free-solid-svg-icons';
import Magnetic from "@/components/animations/Magnetic.jsx";
import EmailDialog from "@/components/EmailDialog";
export default function Footer() {
    const [timeNow, setTimeNow] = useState('');
    const [openEmailModal, setOpenEmailModal] = useState(false);

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

    const onButtonClick = () => {
        setOpenEmailModal(true);
    }
    
    return (
        <Stack
            className="section"
            id="footer"
            spacing={3}
            direction="row"
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
                    <Box 
                        onClick={onButtonClick} 
                        sx={{ position: 'relative',
                        color: 'var(--background-color)',
                        ":hover": {
                            color: "var(--secondary-text)"
                        },
                        display: 'flex', // Use flexbox for centering
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100px', // Give it a defined size
                        height: '100px', // Give it a defined size
                        textTransform: 'none',
                        cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '7rem' }}>
                        <FontAwesomeIcon style={{ rotate: '20deg', position: 'absolute', zIndex: 1}} icon={faOctagon} /> 
                        <Typography textAlign={"center"} variant="body2" sx={{ fontWeight: 'bold', color: 'var(--primary-text)', position: 'relative', zIndex: 2 }}>
                            Contact Me
                        </Typography>
                    </Box>
                </Magnetic>
            </Stack>
            
            <Stack md={6} direction="column" style={{width: '100%', justifyContent: 'space-around', alignItems: 'end'}}>
                <Typography variant="body2" sx={{ color: 'var(--background-color)' }}>2025 © Edition</Typography>
            
                <Typography variant="body2" sx={{ color: 'var(--background-color)' }}>                
  
                    {timeNow} PST
                </Typography>
            
                <Contact size="small" primaryColor={"var(--secondary-text)"} secondaryColor={"var(--primary-text)"}/>
            </Stack>

            <EmailDialog
                open={openEmailModal}
                onClose={() => setOpenEmailModal(false)}
                activeModalProps={{link:"mailto: sydneybaroya@gmail.com"}}
            />
        </Stack>
    );
}