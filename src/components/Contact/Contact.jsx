import {Typography, Box, IconButton, Stack} from "@mui/joy";
import buttonProps from './contactButtons.jsx';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
export default function Contact() {

    const onButtonClick = (event, url) => {
        event.preventDefault();
        window.open(url);
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
                            color: "var(--tertiary-text)",
                            borderRadius: "10px",
                        }}} onClick={(event) => onButtonClick(event, btn.link)}>
                        <FontAwesomeIcon icon={btn.icon} size="2x"/>
                    </IconButton>
                )}
            </Stack>
        </Stack>
    );
}