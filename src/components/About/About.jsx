import { Sheet, Container, Grid, Box, TabPanel, Typography } from "@mui/joy";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { styled } from '@mui/joy/styles';
import './About.css';

export default function About() {

    const Item = styled(Sheet)(() => ({
        backgroundColor: '#98d6a9',
        padding: 8,
        textAlign: 'center',
        color: 'black',
      }));

    return (
        <section className="section" id="about">
            <Typography fontSize="72px" lineHeight="80px"sx={{ color: 'var(--primary-text)'}}>Hi! I'm Sydney.</Typography>
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
                <TabPanel sx={{color: 'var(--fall-background)'}} value="i">My interests</TabPanel>
                <TabPanel sx={{color: 'var(--summer-background)'}} value="s">My skills</TabPanel>
                <TabPanel sx={{color: 'var(--spring-background)'}} value="h">My hobbies</TabPanel>
            </Tabs>
                {/* <Grid container spacing={2} xs={12}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Item elevation={3}>One</Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Item elevation={3}>Two</Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Item elevation={3}>Three</Item>
                    </Grid>
                </Grid> */}
        </section>
    );
}