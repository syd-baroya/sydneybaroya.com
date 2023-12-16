import { Sheet, Container, Grid, Box, TabPanel, Typography } from "@mui/joy";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { styled } from '@mui/joy/styles';
import './About.css';
import './GridItem.jsx';
import GridItem from "./GridItem.jsx";
import { useEffect, useRef, useState } from "react";

export default function About() {

    const ABOUT_SECTIONS = [
        { title: "Expertise", color: "var(--fall-background)", value: "e" },
        { title: "Skills", color: "var(--summer-background)", value: "s" },
        { title: "Hobbies", color: "var(--spring-background)", value: "h" }
    ];

    const EXPERTISE_AREAS = [
        {   
            title: "3D Computer Graphics",
            content: "Passionate about 3D graphics programing. Experienced in creating immersive 3D environments, high-quality models, and animations for diverse projects, including real-time simulations, visual effects, and game development."
        },
        {   
            title: "Web Development",
            content: "I like front-end"
        },
        {   
            title: "Software development",
            content: "I like Java"
        }
    ];

    const [tabIndex, setTabIndex] = useState(0);
    const [tabsHeight, setTabsHeight] = useState('auto'); // State to store Tabs height
    const tabsRef = useRef(null);

    const handleTabChange = (event, newValue) => {
      setTabIndex(newValue);
    };
  
    // Function to calculate and set Tabs container height and width
    const calculateTabsSize = () => {
        if (tabsRef.current) {
            const height = tabsRef.current.clientHeight;
            setTabsHeight(height + 'px');
        }
    };
  
    useEffect(() => {
        calculateTabsSize();
        window.addEventListener('resize', calculateTabsSize); // Update height on window resize
        return () => window.removeEventListener('resize', calculateTabsSize);
    }, []);
  

    return (
        <section className="section" id="about">
            <Typography fontSize="72px" lineHeight="80px" sx={{ color: 'var(--primary-text)'}}>Hi! I'm Sydney.</Typography>
            <div style={{ width: '75%' }}>
                <div ref={tabsRef} style={{ width: "100%"}}>
                    <Tabs size='lg' aria-label="About" defaultValue="e" sx={{borderRadius: 'xl', boxShadow: 'sm'}} onChange={handleTabChange}>
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
                        <div style={{ height: tabsHeight}}>
                            <TabPanel size='lg' sx={{color: `${ABOUT_SECTIONS[0].color}`}} value={ABOUT_SECTIONS[0].value}>
                                <Grid container spacing={3}>
                                    { EXPERTISE_AREAS.map( (area, index) => 
                                        <Grid key={index} xs={12} sm={12} md={12} lg={4}>
                                            <GridItem color={ABOUT_SECTIONS[0].color} title={area.title} content={area.content}></GridItem>
                                        </Grid>
                                    )}
                                </Grid>
                            </TabPanel>
                            <TabPanel sx={{color: `${ABOUT_SECTIONS[1].color}`}} value={ABOUT_SECTIONS[1].value}>My skills</TabPanel>
                            <TabPanel sx={{color: `${ABOUT_SECTIONS[2].color}`}} value={ABOUT_SECTIONS[2].value}>My hobbies</TabPanel>
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}