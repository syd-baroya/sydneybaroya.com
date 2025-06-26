import { Stack, Typography } from "@mui/material";

import '@/styles/work.module.css';

export default function Work() {

    return (
        <Stack className="section" id="work">
            <Typography variant="h1" style={{ color: 'var(--primary-text)'}}>Work</Typography>
            {/* <Project></Project>
            <Tools></Tools> */}
        </Stack>
    );
}