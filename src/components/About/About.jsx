import { Paper, Typography } from "@mui/material";

export default function About() {

    return (
        <section className="section" id="about">
            <Typography fontSize="72px" lineHeight="80px"sx={{color: "#dcdcdc"}}>Hi! I'm Sydney.</Typography>
            <Paper square={false}>About</Paper>
        </section>
    );
}