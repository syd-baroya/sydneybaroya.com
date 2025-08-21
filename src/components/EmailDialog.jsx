'use client';

import {Typography, Box, IconButton, Stack, Dialog, DialogActions, DialogContent, InputAdornment, DialogTitle, FormHelperText, TextField, Button} from "@mui/material";
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export default function EmailDialog({ children, open, onClose, primaryColor, secondaryColor, activeModalProps }) {
    const myEmail = "sydneybaroya@gmail.com";
    const [copiedStatus, setCopiedStatus] = useState('initial');

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
        }
    }

    useEffect(() => {
        if (!open) {
            setCopiedStatus('initial');
        }
    }, [open]);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Email Me!</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={onClose}
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
                {children}
                <Stack spacing={2} sx={{ justifyContent: "center", alignItems: "center", width: "100%"}} onClick={handleCopy}>
                    <TextField
                        value={myEmail}
                        sx={{ 
                            '& .MuiInputBase-root': { cursor: 'pointer' },
                            '& input': {
                                cursor: 'pointer', // override the input's cursor too
                            },
                            width: "200px",
                            fontSize: 'medium'
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
    );
}
