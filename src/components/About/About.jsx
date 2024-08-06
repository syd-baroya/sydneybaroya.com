import { Sheet, Container, Grid, Box, TabPanel, Typography } from "@mui/joy";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import { styled } from '@mui/joy/styles';
import './About.css';
import './GridItem.jsx';
import GridItem from "./GridItem.jsx";
import { useEffect, useRef, useState } from "react";
import ABOUT_SECTIONS from './aboutSections.jsx';

let didInit = false;

export default function About() {


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
        if(!didInit) {
            didInit = true;
            window.addEventListener('resize', calculateTabsSize); // Update height on window resize
            return () => { window.removeEventListener('resize', calculateTabsSize); }
        }
    }, []);
  

    return (
        <section className="section" id="about">
            <Typography fontSize="72px" lineHeight="80px" sx={{ color: 'var(--primary-text)', pb:'30px'}}>Hi! I'm Sydney.</Typography>
            <div style={{ width: '75%' }}>
                <div ref={tabsRef} style={{ width: "100%"}}>
                    <Tabs size='lg' aria-label="About" defaultValue="e" sx={{borderRadius: 'xl', boxShadow: 'sm'}} > 
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
                        <div style={{ height: tabsHeight}}>
                        { ABOUT_SECTIONS.map( (section, index1) =>  
                            <TabPanel key={index1} size='lg' sx={{color: `${section.color}`}} value={section.value}>
                                <Grid container spacing={3} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    { section.content.map( (area, index2) => 
                                        <Grid key={index2} xs={12} sm={12} md={12} lg={12/section.content.length}>
                                            <GridItem color={section.color} title={area.title} content={area.content} index={index2}></GridItem>
                                        </Grid>
                                    )}
                                </Grid>
                            </TabPanel>
                        )}
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}