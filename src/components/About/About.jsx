import { Grid, Box, TabPanel, Typography, AspectRatio, Card, CardContent, CardCover, Stack } from "@mui/joy";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import './About.css';
import { EXPERTISE_SECTION, HOBBIES_SECTION } from './aboutSections.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export default function About({id}) {
    const ABOUT_SECTIONS = [EXPERTISE_SECTION, HOBBIES_SECTION];

    return (
        <Grid className="section" id={id} container spacing={4} columns={12} direction="row" sx={{ justifyContent: "center", alignItems: "center", width: "100%"}}>
            <Box component={Grid} lg={2.5} display={{ xs: "none", lg: "block" }}>
                <Card orientation="vertical" sx={{ borderRadius:"50%", aspectRatio: "1" }}>
                    <CardCover>
                        <img alt="Sydney Baroya" src="/images/headshot.JPG"/>
                    </CardCover>
                </Card>
            </Box>
            <Grid container columns={12} direction="column" justifyContent="flex-start" alignItems="center" xs={12} lg={7} sx={{height: "100%"}}> 
                <Grid container columns={12} direction="row" justifyContent="space-between" alignItems="center" xs={12} >
                    <Box component={Grid} xs={4} display={{ lg: "none", xs: "block" }}>
                        <Card orientation="vertical" sx={{ borderRadius:"50%", aspectRatio: "1" }}>
                            <CardCover>
                                <img alt="Sydney Baroya" src="/images/headshot.JPG"/>
                            </CardCover>
                        </Card>
                    </Box>
                    <Grid xs={8} lg={12}>
                        <Typography textAlign="end" fontSize="64px" sx={{ color: 'var(--primary-text)'}}>Hi! I'm Sydney.</Typography>
                    </Grid>
                </Grid>
                <Grid xs={12} sx={{height: {md: '450px', xs: 'auto'}}}>
                    <Box sx={{height: "100%"}}>
                        <Tabs size='lg' aria-label="About" defaultValue="e" sx={{borderRadius: 'xl', boxShadow: 'sm', height: '100%'}} > 
                            <TabList
                                disableUnderline
                                tabFlex={1}
                                sx=
                                {{
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
                                { ABOUT_SECTIONS.map( (section) => 
                                    <Tab disableIndicator key={section.value} sx={{color: `${section.color} !important`}} value={section.value}>{section.title}</Tab>
                                )}
                            </TabList>
                            <Box sx={{height: "100%", display: 'flex', justifyContent: "center", alignItems: 'center'}}>
                                <TabPanel key='expertise_tab' size='lg' sx={{color: `${EXPERTISE_SECTION.color}`}} value={EXPERTISE_SECTION.value}>
                                    <Grid container spacing={3} columns={12} sx={{justifyContent: "center", alignItems: "center"}}>
                                        { EXPERTISE_SECTION.content.map( (exp, index) => 
                                            <Grid key={index} xs={12} md={12/EXPERTISE_SECTION.content.length}>                                    
                                                    <Card sx={{ 
                                                        border: "solid 2px",
                                                        borderColor: EXPERTISE_SECTION.color,
                                                        borderRadius: '15px',
                                                        color: EXPERTISE_SECTION.color,
                                                        boxSizing: 'border-box', 
                                                        [`& > *`]: {
                                                            '--stack-point': '500px',
                                                            minWidth:
                                                            'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
                                                        },                                                        
                                                        minHeight: 200,
                                                        }}
                                                        elevation={3} 
                                                    >
                                                        <CardContent spacing={3} sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                                                            <FontAwesomeIcon icon={exp.icon} color="var(--tertiary-color)" size="4x"/>
                                                            <Stack direction="column" sx={{justifyContent: "space-between", alignItems: "flex-start"}}>
                                                                <Typography level="h3" textAlign="start" textColor={EXPERTISE_SECTION.color} margin="1px" >{exp.title}</Typography>
                                                                <Typography textAlign="start" level="body-md" textColor={EXPERTISE_SECTION.color}>{exp.content}</Typography>
                                                                <Typography textAlign="start" level="body-md" fontWeight="lg" textColor="var(--tertiary-color)"
                                                                startDecorator={
                                                                    <Typography textColor="var(--tertiary-color)" level="h2">
                                                                    {'{'}
                                                                    </Typography>
                                                                }
                                                                endDecorator={
                                                                    <Typography textColor="var(--tertiary-color)" level="h2">
                                                                    {'}'}
                                                                    </Typography>
                                                                }>{exp.subContent}</Typography>
                                                            </Stack>
                                                        </CardContent>
                                                    </Card>
                                            </Grid>
                                        )}
                                    </Grid>
                                </TabPanel>                                    
                                <TabPanel key='hobbies_tab' size='lg' sx={{color: `${HOBBIES_SECTION.color}`}} value={HOBBIES_SECTION.value}>
                                    <Grid container spacing={3} sx={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                                        { HOBBIES_SECTION.content.map( (hobby, index) =>                    
                                            <Grid key={index} xs={12} md={12/HOBBIES_SECTION.content.length}>                                    
                                                <Box >
                                                    <Card
                                                        orientation="vertical"
                                                        sx={{
                                                        [`& > *`]: {
                                                            '--stack-point': '500px',
                                                            minWidth:
                                                            'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
                                                        },
                                                        minHeight: 200,
                                                        border: "solid 2px",
                                                        borderColor: HOBBIES_SECTION.color,
                                                        borderRadius: '15px'
                                                        }}
                                                    >
                                                        <CardCover>
                                                            <img src={hobby.content} alt=""/>
                                                        </CardCover>
                                                        <CardContent>
                                                            <Typography level="h3" sx={{ color: 'white', fontWeight: 'lg', mt: { xs: 24, sm: 30 } }}>{hobby.title}</Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Box>
                                            </Grid>
                                        )}
                                    </Grid>
                                </TabPanel>
                            </Box>
                        </Tabs>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}