'use client';

import {Typography, Box, IconButton, Stack, Dialog, DialogActions, DialogContent, InputAdornment, DialogTitle, FormHelperText, TextField, Button} from "@mui/material";
import buttonProps from './contactButtons.jsx';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
export default function Contact({size, primaryColor, secondaryColor}) {

    const myEmail = "sydneybaroya@gmail";
    const [openEmailModal, setOpenEmailModal] = useState(false);
    const [copiedStatus, setCopiedStatus] = useState('initial');
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
    
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(myEmail);
      setCopiedStatus('success');
    } catch (err) {
        setCopiedStatus('failure');
    }
  };
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
            <Dialog open={openEmailModal} onClose={() => {setOpenEmailModal(false); setCopiedStatus('initial');}}>
                <DialogTitle>Email Me!</DialogTitle>
                 <IconButton
                    aria-label="close"
                    onClick={() => {setOpenEmailModal(false); setCopiedStatus('initial');}}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                    >
                    <FontAwesomeIcon icon="fa-solid fa-xmark"/>
                </IconButton>
                <DialogContent>
                        <Stack spacing={2} sx={{ justifyContent: "center", alignItems: "center", width: "100%"}} onClick={handleCopy}>
                            <TextField
                                value={myEmail}
                                sx={{ '& .MuiInputBase-root': { cursor: 'pointer' }, 
                                    '& input': {
                                        cursor: 'pointer', // override the input's cursor too
                                    },
                                }}
                                slotProps={{
                                input: {
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <FontAwesomeIcon icon="fa-solid fa-envelope" size={iconSize}/>
                                    </InputAdornment>
                                    ),
                                    readOnly: true
                                },
                                }}
                                variant="standard"
                            />
                            {copiedStatus==='success' && (
                                <FormHelperText sx={{color: 'green'}}>
                                    Copied to clipboard!
                                </FormHelperText>
                            )}
                            {copiedStatus==='failure' && (
                                <FormHelperText sx={{ color: 'red'}}>
                                        Something went wrong, please try again later.
                                </FormHelperText>
                            )} 
                        </Stack>
                </DialogContent>
                <DialogActions sx={{ justifyContent: "center", alignItems: "center"}}>
                    <Button sx={{bgcolor: primaryColor, color: secondaryColor, borderRadius: "10px"}} 
                        onClick={(event)=> { onButtonClick(event, {link: activeModalProps.link, openModal: false});}}>Open in default mail app</Button>
                </DialogActions>
        </Dialog>
        </Stack>
    );
}