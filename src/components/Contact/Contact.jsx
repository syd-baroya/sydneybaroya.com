import {Typography, Box, IconButton, Stack, Modal, ModalDialog, ModalClose, DialogTitle, DialogContent, FormControl, FormLabel, FormHelperText, Input, Button} from "@mui/joy";
import buttonProps from './contactButtons.jsx';
import { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
export default function Contact() {

    const myEmail = "sydneybaroya@gmail";
    const [openEmailModal, setOpenEmailModal] = useState(false);
    const [copiedStatus, setCopiedStatus] = useState('initial');
    const [activeModalProps, setActiveModalProps] = useState({});
    
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
        if(btnProps.name === "Email") {
            setOpenEmailModal(true);
            setActiveModalProps(btnProps);
        }
    }

    return (
        <Stack className="section" id="contact" direction="column" spacing={2} sx={{ justifyContent: "center", alignItems: "center"}}>                    
             <Box sx={{justifyContent: "center", alignItems: "center", width: "100%"}}>
                <Typography textAlign="center" fontSize="64px" sx={{ color: 'var(--primary-text)'}}>Contact</Typography>
                <Typography textAlign="center" fontSize="18px" sx={{ color: 'var(--primary-text)'}}>Send me an email or check out these links below!</Typography>
            </Box>
            <Stack direction="row" spacing={2} sx={{ justifyContent: "center", alignItems: "center", width: "100%"}}>
                { buttonProps.map( (btn) => 
                    <IconButton key={btn.name} 
                    aria-label={btn.name} component="a" href={btn.link}
                    sx={{ 
                        color: "var(--primary-text)",
                        ":hover": {
                            bgcolor: "var(--primary-text)",
                            color: "var(--tertiary-color)",
                            borderRadius: "10px",
                        }}} onClick={(event) => onButtonClick(event, btn)} rel="noopener noreferrer" target="_blank" >
                        <FontAwesomeIcon icon={btn.icon} size="2x"/>
                    </IconButton>
                )}
            </Stack>
            <Modal open={openEmailModal} onClose={() => {setOpenEmailModal(false); setCopiedStatus('initial');}}>
                <ModalDialog>
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <DialogTitle>Email</DialogTitle>
                    <form>
                        <Stack spacing={2}>
                            <FormControl>
                                <Input
                                    value={myEmail}
                                    startDecorator={<FontAwesomeIcon icon="fa-solid fa-envelope" size="2x"/>}
                                    endDecorator={<Button sx={{bgcolor: "var(--tertiary-color)", ":hover": { bgcolor: "var(--tertiary-color)"}}}
                                    onClick={handleCopy}>Copy</Button>}
                                    />
                                {copiedStatus==='success' && (
                                    <FormHelperText sx={(theme) => ({ color: theme.vars.palette.primary[400] })}>
                                        Copied to clipboard!
                                    </FormHelperText>
                                )}
                                {copiedStatus==='failure' && (
                                    <FormHelperText sx={(theme) => ({ color: theme.vars.palette.primary[400] })}>
                                         Something went wrong, please try again later.
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <Button 
                            sx={{bgcolor: "var(--tertiary-color)", ":hover": { bgcolor: "var(--tertiary-color)"}}} 
                            rel="noopener noreferrer" target="_blank"  component="a" href={activeModalProps.link}>Open in default mail app</Button>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </Stack>
    );
}