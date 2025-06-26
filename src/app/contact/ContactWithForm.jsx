'use client';
import { Grid,Sheet, Typography, FormControl, FormLabel, Input, Textarea, Button, Box, IconButton, Stack, FormHelperText} from "@mui/material";
import buttonProps from './contactButtons.jsx';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
export default function Contact() {

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [status, setStatus] = useState('initial');

    const handleSubmit = (event) => {
        event.preventDefault();
        setStatus('loading' );
        console.log(status)
        try {
          // Replace timeout with real backend operation
          setTimeout(() => {
            setStatus('sent');
            console.log(status)
          }, 1500);
        } catch (error) {
            setStatus('failure');
            console.log(status)
        }
      };

    const onButtonClick = (url) => {
        window.open(url);
    }

    const Header  = () => {
        return (
            <Box sx={{justifyContent: "center", alignItems: "center", width: "100%"}}>
                <Typography textAlign="center" fontSize="64px" sx={{ color: 'var(--primary-text)'}}>Contact</Typography>
                <Typography textAlign="center" fontSize="18px" sx={{ color: 'var(--primary-text)'}}>Send me an email or check out my links below!</Typography>
            </Box>
        )
    };

    const Buttons = () => {
        return (
            <Stack direction="row" spacing={2} sx={{ justifyContent: "center", alignItems: "center", width: "100%"}}>
                { buttonProps.map( (btn) => 
                    <IconButton key={btn.name} sx={{ 
                        color: "var(--primary-text)",
                        ":hover": {
                            bgcolor: "var(--primary-text)",
                            color: "var(--secondary-text)",
                            borderRadius: "10px",
                        }}} onClick={() => onButtonClick(btn.link)}>
                        <FontAwesomeIcon icon={btn.icon} size="2x"/>
                    </IconButton>
                )}
            </Stack>
        )
    };

    return (
        <Grid className="section" id="contact" container spacing={2} columns={12} direction="row" sx={{ justifyContent: "space-evenly", alignItems: "center", width: "100%"}}>
            <Grid md={4} display={{ xs: "none", md: "block" }}>
                <Stack direction="column" spacing={2} sx={{ justifyContent: "center", alignItems: "center"}}>                    
                    <Header/>
                    <Buttons/>
                </Stack>
            </Grid>
            <Grid container columns={12} direction="column" justifyContent="center" alignItems="center" xs={12} md={6}>
                <Grid xs={12} display={{ xs: "block", md: "none" }} >
                    <Header/>
                </Grid>
                <Sheet xs={12} component={Grid} sx={{ borderRadius: '4px', height: '100%', maxWidth:'600px', padding: '3%'}}>
                    <form onSubmit={handleSubmit} id="contactForm">
                        <Stack direction="column" spacing={2} sx={{ justifyContent: "center", alignItems: "center"}}>
                            <FormControl sx={{ width: '100%' }}>
                                <FormLabel>Email</FormLabel>
                                <Input required
                                    type="email"
                                    placeholder="example@domain.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FormControl>
                            <FormControl sx={{ width: '100%' }}>
                                <FormLabel>Subject</FormLabel>
                                <Input required 
                                    placeholder="Website Contact Form"
                                    onChange={(e) => setSubject(e.target.value)}/>
                            </FormControl>
                                <FormControl sx={{ width: '100%' }}>
                                    <FormLabel>Message</FormLabel>
                                    <Textarea required
                                        placeholder="Type message here…"
                                        onChange={(e) => setMessage(e.target.value)}
                                        minRows={3}
                                        sx={{ minWidth: 300 }}
                                    />
                                    {status === 'failure' && (
                                        <FormHelperText
                                            sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
                                        >
                                            Oops! something went wrong, please try again later.
                                        </FormHelperText>
                                    )}
                                    {status === 'sent' && (
                                        <FormHelperText
                                            sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
                                        >
                                            You are all set!
                                        </FormHelperText>
                                    )}
                                </FormControl>
                                <Button type="submit" sx={{width: '100%',bgcolor: "var(--secondary-text)" }}>Send</Button>
                        </Stack>
                    </form>
                </Sheet>
                <Grid xs={12} display={{ xs: "block", md: "none" }} >
                    <Buttons />
                </Grid>
            </Grid>
        </Grid>
    );
}