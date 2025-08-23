'use client';

import {Typography, Box, IconButton, Stack} from "@mui/material";
import EmailDialog from '../EmailDialog';
// import buttonProps from './contactButtons.jsx';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact({size, primaryColor, secondaryColor}) {

    const [openEmailModal, setOpenEmailModal] = useState(false);
    const [activeModalProps, setActiveModalProps] = useState({});
    const [iconSize, setIconSize] = useState('2x');

    const buttonProps = [
        {
            name: "GitHub",
            icon: faGithub,
            link: "https://github.com/syd-baroya",
            openModal: false
        },
        {
            name: "LinkedIn",
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/sydney-baroya-420714111/",
            openModal: false
        },
        {
            name: "Email",
            icon: faEnvelope,
            link: "mailto: sydneybaroya@gmail.com",
            openModal: true,
        }
    ];

    useEffect(() => {
        if(size === "small") {
            setIconSize('1x');
        } else if (size === "medium") {
            setIconSize('2x');
        } else if (size === "large") {
            setIconSize('3x');
        }
    }, [size]);
    
    const onButtonClick = (event, btnProps) => {
        event.preventDefault();
        if(!btnProps.openModal) {
            window.open(btnProps.link);
        } else {
            if(btnProps.name === "Email") {
                setOpenEmailModal(true);
            }
            setActiveModalProps(btnProps);
        }
    }

    return (
        <Stack id="contact" direction="column" spacing={2} sx={{ justifyContent: "center", alignItems: "center"}}>                    
            {/* <Typography textAlign="center" fontSize="48px" sx={{ color: 'var(--primary-text)'}}>Contact</Typography> */}
            <Stack direction="row" spacing={2} sx={{ justifyContent: "center", alignItems: "center", width: "100%"}}>
                { buttonProps.map( (btn) => 
                    <IconButton key={btn.name} 
                    aria-label={btn.name} component="a" href={btn.link}
                    sx={{ 
                        color: primaryColor,
                        ":hover": {
                            bgcolor: primaryColor,
                            color: secondaryColor,
                            borderRadius: "10px",
                        }}} onClick={(event) => onButtonClick(event, btn)}>
                        <FontAwesomeIcon icon={btn.icon} size={iconSize}/>
                    </IconButton>
                )}
            </Stack>
            <EmailDialog
                open={openEmailModal}
                onClose={() => setOpenEmailModal(false)}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                activeModalProps={activeModalProps}
            />
        </Stack>
    );
}