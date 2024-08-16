import { Sheet, Container, Grid, Box, TabPanel, Typography, AspectRatio, Card, CardContent, Avatar } from "@mui/joy";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { styled } from '@mui/joy/styles';
import './About.css';
import { useEffect, useRef, useState } from "react";
import { EXPERTISE_SECTION, SKILLS_SECTION, HOBBIES_SECTION } from './aboutSections.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

let didInit = false;

export default function About() {
    const ABOUT_SECTIONS = [EXPERTISE_SECTION, SKILLS_SECTION, HOBBIES_SECTION];

    const [tabIndex, setTabIndex] = useState(0);
    const [tabsHeight, setTabsHeight] = useState('auto'); // State to store Tabs height
    const tabsRef = useRef(null);

    const handleTabChange = (event, newValue) => {
      setTabIndex(newValue);
      calculateTabsSize();
    };
  
    // Function to calculate and set Tabs container height and width
    const calculateTabsSize = () => {
        if (tabsRef.current) {
            const height = tabsRef.current.clientHeight;
            setTabsHeight(height + 'px');
        }
    };
  
    useEffect(() => {
        if(!didInit) {
            didInit = true;
            window.addEventListener('resize', calculateTabsSize); // Update height on window resize
            return () => { window.removeEventListener('resize', calculateTabsSize); }
        }
    }, []);
  

    return (
        <section className="section" id="about" style={{height: '85vh'}}>
            <Grid container spacing={3} columns={12} direction="row" sx={{ display: 'flex', width: '100%', height: '100%'}}>
                <Grid container columns={12} direction="row" justifyContent="space-between" alignItems="center" xs={12}>
                    <Box component={Grid} item xs={4} display={{ lg: "none", xs: "block" }}>
                        <AspectRatio flex ratio={4/3} sx={{borderRadius:"50%", aspectRatio: "1"}} >
                            <img alt="Sydney Baroya" src="/images/headshot.JPG"/>
                        </AspectRatio>
                    </Box>
                    <Grid xs={8} sm={8} md={8} lg={12}>
                        <Typography textAlign="end" fontSize="72px" lineHeight="80px" sx={{ color: 'var(--primary-text)'}}>Hi! I'm Sydney.</Typography>
                    </Grid>
                </Grid>
                <Grid container columns={12} direction="row" justifyContent="space-between" alignItems="center" xs={12}>
                    <Box component={Grid} item lg={3} display={{ xs: "none", lg: "block" }}>
                        <AspectRatio flex ratio={4/3} sx={{borderRadius:"50%", aspectRatio: "1"}} >
                            <img alt="Sydney Baroya" src="/images/headshot.JPG"/>
                        </AspectRatio>
                    </Box>
                    <Grid xs={12} sm={12} md={12} lg={9} style={{height: '100%'}}>
                        <Box ref={tabsRef} margin={2} sx={{ width: '100%', height: '100%'}}>
                            <Tabs size='lg' aria-label="About" defaultValue="e" sx={{borderRadius: 'xl', boxShadow: 'sm', height: '100%'}} > 
                            {/* can add onChange={handleTabChange} to above*/}
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
                                <div>
                                    <TabPanel key='expertise_tab' size='lg' sx={{color: `${EXPERTISE_SECTION.color}`, height: '100%'}} value={EXPERTISE_SECTION.value}>
                                        <Grid container spacing={3} columns={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                                            { EXPERTISE_SECTION.content.map( (exp, index) => 
                                                <Grid key={index} xs={12} sm={12} md={12} lg={12/EXPERTISE_SECTION.content.length}>                                    
                                                    <Card sx={{ 
                                                            border: "solid 2px",
                                                            borderColor: EXPERTISE_SECTION.color,
                                                            borderRadius: '15px',
                                                            textAlign: 'center',
                                                            color: EXPERTISE_SECTION.color,
                                                            height: 1,
                                                            boxSizing: 'border-box', 
                                                            padding: '30px',
                                                            width: 1,
                                                            display: 'flex',
                                                            justifyContent: 'space-around',
                                                            flexDirection: 'column'
                                                        }}
                                                        elevation={3} 
                                                    >
                                                        <Typography level="h3" textAlign="start" color={EXPERTISE_SECTION.color} margin="1px"
                                                            startDecorator={<FontAwesomeIcon icon={exp.icon} size="2x"  margin="5px"/>} >{exp.title}</Typography>
                                                        <Typography ml={5} textAlign="start" level="body-md" color={EXPERTISE_SECTION.color}>{exp.content}</Typography>
                                                    </Card>
                                                </Grid>
                                            )}
                                        </Grid>
                                    </TabPanel>                                    
                                    <TabPanel key='skills_tab' size='lg' sx={{color: `${SKILLS_SECTION.color}`, height: '100%'}} value={SKILLS_SECTION.value}>
                                        <Grid container spacing={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                                            { SKILLS_SECTION.content.map( (skill, index) => 
                                                <Grid key={index} xs={12} sm={12} md={12} lg={12/SKILLS_SECTION.content.length}>                                    
                                                    <Card sx={{ 
                                                            border: "solid 2px",
                                                            borderColor: SKILLS_SECTION.color,
                                                            borderRadius: '15px',
                                                            textAlign: 'center',
                                                            color: SKILLS_SECTION.color,
                                                            height: 1,
                                                            boxSizing: 'border-box', 
                                                            padding: '10px',
                                                            width: 1,
                                                            display: 'flex',
                                                            justifyContent: 'space-around',
                                                            flexDirection: 'column'
                                                        }}
                                                        elevation={3} 
                                                    >
                                                        <Typography level="h3" sx={{ color: SKILLS_SECTION.color }}>{skill.title}</Typography>
                                                        <Typography level="body-md" sx={{ color: SKILLS_SECTION.color }}>{skill.content}</Typography>
                                                    </Card>
                                                </Grid>
                                            )}
                                        </Grid>
                                    </TabPanel> 
                                    <TabPanel key='hobbies_tab' size='lg' sx={{color: `${HOBBIES_SECTION.color}`, height: '100%'}} value={HOBBIES_SECTION.value}>
                                        <Grid container spacing={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                                            { HOBBIES_SECTION.content.map( (hobby, index) =>                    
                                                <Grid key={index} xs={12/HOBBIES_SECTION.content.length}>                                    
                                                    <Box >
                                                        <Card
                                                            orientation="horizontal"
                                                            sx={{
                                                            flexWrap: 'wrap',
                                                            [`& > *`]: {
                                                                '--stack-point': '400px',
                                                                minWidth:
                                                                'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
                                                            },
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%',
                                                            border: "solid 2px",
                                                            borderColor: HOBBIES_SECTION.color,
                                                            borderRadius: '15px',
                                                            }}
                                                        >
                                                            <AspectRatio flex ratio={hobby.ratio}>
                                                                <img
                                                                    src={hobby.content} alt=""
                                                                />
                                                            </AspectRatio>
                                                            {/* <CardContent>
                                                                <Typography level="h3" sx={{ color: HOBBIES_SECTION.color }}>{hobby.title}</Typography>
                                                            </CardContent> */}
                                                        </Card>
                                                    </Box>
                                                </Grid>
                                            )}
                                        </Grid>
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
}