import { Grid, Box, TabPanel, Typography, AspectRatio, Card, CardContent, CardCover } from "@mui/joy";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import './About.css';
import { EXPERTISE_SECTION, SKILLS_SECTION, HOBBIES_SECTION } from './aboutSections.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export default function About() {
    const ABOUT_SECTIONS = [EXPERTISE_SECTION, SKILLS_SECTION, HOBBIES_SECTION];

    return (
            <Grid className="section" id="about" container spacing={2} columns={12} direction="row" sx={{ justifyContent: "center", alignItems: "center", width: "100%"}}>
                <Box component={Grid} md={3} display={{ xs: "none", md: "block" }}>
                    <AspectRatio flex ratio={4/3} sx={{borderRadius:"50%", aspectRatio: "1"}} >
                        <img alt="Sydney Baroya" src="/images/headshot.JPG"/>
                    </AspectRatio>
                </Box>
                <Grid container columns={12} direction="column" justifyContent="flex-start" alignItems="center" xs={12} md={9} sx={{height: "100%"}}> 
                    <Grid container columns={12} direction="row" justifyContent="space-between" alignItems="center" xs={12} >
                        <Box component={Grid} xs={4} display={{ md: "none", xs: "block" }}>
                            <AspectRatio flex ratio={4/3} sx={{borderRadius:"50%", aspectRatio: "1"}} >
                                <img alt="Sydney Baroya" src="/images/headshot.JPG"/>
                            </AspectRatio>
                        </Box>
                        <Grid xs={8} md={12}>
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
                                <Box sx={{height: "100%", display: 'flex', alignItems: 'center'}}>
                                    <TabPanel key='expertise_tab' size='lg' sx={{color: `${EXPERTISE_SECTION.color}`}} value={EXPERTISE_SECTION.value}>
                                        <Grid container spacing={3} columns={12} sx={{justifyContent: "center"}}>
                                            { EXPERTISE_SECTION.content.map( (exp, index) => 
                                                <Grid key={index} xs={12} >                                    
                                                    <Card sx={{ 
                                                            border: "solid 2px",
                                                            borderColor: EXPERTISE_SECTION.color,
                                                            borderRadius: '15px',
                                                            color: EXPERTISE_SECTION.color,
                                                            boxSizing: 'border-box', 
                                                            padding: '10px',
                                                        }}
                                                        elevation={3} 
                                                    >
                                                        <CardContent>
                                                            <Typography level="h3" textAlign="start" color={EXPERTISE_SECTION.color} margin="1px"
                                                                startDecorator={<FontAwesomeIcon icon={exp.icon} size="2x"/>} >{exp.title}</Typography>
                                                            <Typography ml={5} textAlign="start" level="body-md" color={EXPERTISE_SECTION.color}>{exp.content}</Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            )}
                                        </Grid>
                                    </TabPanel>                                    
                                    <TabPanel key='skills_tab' size='lg' sx={{color: `${SKILLS_SECTION.color}`}} value={SKILLS_SECTION.value}>
                                        <Grid container spacing={3}  sx={{justifyContent: "center"}}>
                                            { SKILLS_SECTION.content.map( (skill, index) => 
                                                <Grid key={index} xs={12}>                                    
                                                    <Card sx={{ 
                                                            border: "solid 2px",
                                                            borderColor: SKILLS_SECTION.color,
                                                            borderRadius: '15px',
                                                            color: SKILLS_SECTION.color,
                                                            height: 1,
                                                            boxSizing: 'border-box', 
                                                            padding: '10px',
                                                            width: 1,
                                                            flexDirection: 'column'
                                                        }}
                                                        elevation={3} 
                                                    >
                                                        <CardContent>
                                                            <Typography level="h3" textAlign="start" color={SKILLS_SECTION.color} margin="1px"
                                                                startDecorator={<FontAwesomeIcon icon={skill.icon} size="2x"/>} >{skill.title}</Typography>
                                                            <Typography ml={5} textAlign="start" level="body-md" color={SKILLS_SECTION.color}>{skill.content}</Typography>
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
                                                            // maxHeight={250}
                                                            sx={{
                                                            // flexWrap: 'wrap',
                                                            [`& > *`]: {
                                                                '--stack-point': '500px',
                                                                minWidth:
                                                                'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
                                                            },
                                                            minHeight: 200,
                                                            // maxWidth: 300,
                                                            border: "solid 2px",
                                                            borderColor: HOBBIES_SECTION.color,
                                                            borderRadius: '15px',
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