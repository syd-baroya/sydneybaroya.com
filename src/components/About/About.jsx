import { Sheet, Container, Grid, Box, TabPanel, Typography } from "@mui/joy";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { styled } from '@mui/joy/styles';

export default function About() {

    return (
        <section className="section" id="about">
            <Typography fontSize="72px" lineHeight="80px"sx={{color: "#dcdcdc"}}>Hi! I'm Sydney.</Typography>
            <Sheet sx={{ borderRadius: '4px', width: '100%', height: '50vh'}}>About Sheet</Sheet>
        </section>
    );
}