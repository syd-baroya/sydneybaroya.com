'use client';

import {Typography, Box, IconButton, Stack} from "@mui/material";
import EmailDialog from '../EmailDialog';
import buttonProps from './contactButtons.jsx';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
export default function Contact({size, primaryColor, secondaryColor}) {

    const [openEmailModal, setOpenEmailModal] = useState(false);
    const [activeModalProps, setActiveModalProps] = useState({});
    const [iconSize, setIconSize] = useState('2x');

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