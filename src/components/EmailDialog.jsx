'use client';

import {Typography, Box, IconButton, Stack, Dialog, DialogActions, DialogContent, InputAdornment, DialogTitle, FormHelperText, TextField, Button} from "@mui/material";
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function EmailDialog({ children, open, onClose, activeModalProps }) {
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
            <DialogTitle sx={{color: 'var(--primary-text)', backgroundColor: 'var(--background-color)'}}>Email Me!</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: 'var(--primary-text)',
                    backgroundColor: 'transparent',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: 'var(--secondary-text)'
                    }
                })}
            >
                <FontAwesomeIcon icon={faXmark}/>
            </IconButton>
            <DialogContent sx={{color: 'var(--primary-text)', backgroundColor: 'var(--background-color)'}}>
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
            <DialogActions sx={{ justifyContent: "center", alignItems: "center", backgroundColor: 'var(--background-color)'}}>
                <Button sx={{
                    bgcolor: 'var(--primary-text)', color: 'var(--background-color)', borderRadius: "10px",
                    '&:hover': {
                        bgcolor: 'var(--secondary-text)',
                        color: 'var(--background-color)'
                    }
                }}
                    onClick={(event)=> { onButtonClick(event, {link: activeModalProps.link, openModal: false});}}>Open in default mail app</Button>
            </DialogActions>
        </Dialog>
    );
}
