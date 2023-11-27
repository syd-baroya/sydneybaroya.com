import { Sheet, Container, Grid, Box, TabPanel, Typography } from "@mui/joy";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { styled } from '@mui/joy/styles';
import './About.css';

export default function About() {

    const InterestItem = styled(Sheet)(() => ({
        border: "solid 1px",
        borderColor: 'var(--fall-background)',
        padding: 8,
        height: '100%',
        textAlign: 'center',
        color: 'var(--fall-background)',
      }));

    return (
        <section className="section" id="about">
            <Typography fontSize="72px" lineHeight="80px" sx={{ color: 'var(--primary-text)'}}>Hi! I'm Sydney.</Typography>
            <Tabs size='lg' aria-label="tabs" defaultValue="i" sx={{borderRadius: 'xl',  width: '65%', height: '400px'}}>
                <TabList
                    disableUnderline
                    tabFlex="auto"
                    sx={{
                        gap: 0.5,
                        borderRadius: '15px 15px 0px 0px',
                        bgcolor: 'background.level2',
                        [`& .${tabClasses.root}[aria-selected="true"]`]: {
                            borderRadius: '15px 15px 0px 0px',
                            bgcolor: 'background.surface',
                        },
                        [`& .${tabClasses.root}[aria-selected="false"]`]: {
                            borderRadius: '15px 15px 0px 0px', 
                        }
                    }}
                >
                    <Tab disableIndicator sx={{color: 'var(--fall-background) !important'}} value="i">Interests</Tab>
                    <Tab disableIndicator sx={{color: 'var(--summer-background) !important'}} value="s">Skills</Tab>
                    <Tab disableIndicator sx={{color: 'var(--spring-background) !important'}} value="h">Hobbies</Tab>
                </TabList>
                <TabPanel sx={{color: 'var(--fall-background)', display: 'flex', alignItems: 'center', justifyContent: 'center'}} value="i">
                    <Grid container xs={12} sx={{height: 3/4, pb: 'inherit'}}>
                        <Grid xs={12} md={4}>
                            <InterestItem elevation={3}>One</InterestItem>
                        </Grid>
                        <Grid xs={12} md={4}>
                            <InterestItem elevation={3}>Two</InterestItem>
                        </Grid>
                        <Grid xs={12} md={4}>
                            <InterestItem elevation={3}>Three</InterestItem>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel sx={{color: 'var(--summer-background)'}} value="s">My skills</TabPanel>
                <TabPanel sx={{color: 'var(--spring-background)'}} value="h">My hobbies</TabPanel>
            </Tabs>
                
        </section>
    );
}