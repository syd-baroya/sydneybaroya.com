import EXPERIENCE_AREAS from "./experienceAreas";

import { List, ListItem, listClasses, Divider,Grid, Accordion, Avatar, Typography, AccordionGroup, AccordionDetails, AccordionSummary, accordionDetailsClasses, accordionSummaryClasses, accordionClasses, Stack, ListItemContent } from "@mui/joy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


export default function Experience() {

    const accordionGroupStyle = (theme) => ({
            width: '100%',
            borderRadius: 'lg',
            size: 'lg',
            bgcolor: 'background.surface',
            [`& .${accordionSummaryClasses.indicator}`]: {
                position:'absolute', left: '50%', bottom: '5%',
            },
            [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:{
                paddingBlock: '1rem',
            },
            [`& .${accordionSummaryClasses.button}`]: {
                // padding: '1.5rem 1rem 3rem 1rem',
                paddingBlock: '1.5rem',
            },
            [`& .${accordionClasses.root}`]: {
                transition: '0.2s ease',
                '& button:not([aria-expanded="true"])': {
                    transition: '0.2s ease',
                },
                '& button:hover': {
                    background: 'background.level2',
                },
            },
            [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
                bgcolor: 'background.level1',
                borderRadius: 'md',
                borderBottom: '1px solid',
                borderColor: 'background.level2',
            },
            '& [aria-expanded="true"]': {
                boxShadow: `inset 0 -1px 0 ${theme.vars.palette.divider}`,
            },
    });

    const hasDetails = (item) => {
        return item.specialLines.length > 0 || item.content.length > 0;
    };

    const onLinkClick = (event, link) => {
        event.preventDefault();
        window.open(link);
    };

    return (
        <Grid className="section" id="experience" container spacing={2} columns={12} direction="column" sx={{ justifyContent: "center", alignItems: "center", width: "100%"}}>
            <Grid xs={12} lg={9}>
                <Typography textAlign="end" fontSize="64px" sx={{ color: 'var(--primary-text)'}}>Experience</Typography>
            </Grid>
            {EXPERIENCE_AREAS.map((area) => ( 
                <Stack key={area.title} component={Grid} xs={12} lg={9} className="section" direction="column" spacing={2} sx={{ justifyContent: "center", alignItems: "center", width: "100%"}}>
                    <AccordionGroup  variant="outlined" sx={accordionGroupStyle}>
                        <Typography paddingLeft={2} paddingTop={2} level="h2" sx={{color: "var(--secondary-color)"}}>{area.title}</Typography>
                        <Divider />
                        {area.items.map((item) => (
                            <Accordion key={item.title} disabled={!hasDetails(item)}>
                                <AccordionSummary indicator={hasDetails(item) ? <Avatar size="sm" variant="plain" sx={{color: "var(--tertiary-color)"}} ><FontAwesomeIcon icon="fa-solid fa-chevron-down"/></Avatar> : null}>
                                <Grid container columns={12} direction="row" sx={{ padding: "0rem 2rem", justifyContent: "center", alignItems: "center", width: "100%"}}>
                                        <Stack xs={4} component={Grid} direction="row" spacing={1} sx={{ justifyContent: "start", alignItems: "center"}}>
                                            <Avatar sx={{color: "var(--tertiary-color)"}} >
                                                <FontAwesomeIcon icon={item.icon}/>
                                            </Avatar>
                                            <Typography level="title-lg" sx={{color: "var(--secondary-color)"}}>{item.org}</Typography>
                                        </Stack>
                                        <Grid xs={4}>
                                            <Typography textAlign="center" level="title-lg" sx={{color: "var(--secondary-color)"}}>{item.title}</Typography>
                                        </Grid>
                                        <Grid xs={4}>
                                            <Typography  textAlign="end" level="title-lg" sx={{color: "var(--secondary-color)"}}>{item.date}</Typography>
                                        </Grid>
                                    </Grid>
                                </AccordionSummary>
                                { hasDetails(item) && 
                                    <AccordionDetails sx={{color: "var(--secondary-color)"}}>
                                        <List marker="disc" sx={{margin:"1rem 2rem"}}>
                                            {item.specialLines.map((specialLine, index) => (
                                                <ListItem key={index} sx={{'::marker': { color: 'var(--tertiary-color)'}}}>
                                                    <ListItemContent>
                                                        <Typography level="body-lg" sx={{color: "var(--secondary-color)"}}>{specialLine.before}{specialLine.line()}{specialLine.after}</Typography>
                                                    </ListItemContent>
                                                </ListItem>
                                            ))}
                                            {item.content.map((bulletPoint, index) => (
                                                <ListItem key={index} sx={{'::marker': { color: 'var(--tertiary-color)'}}}>
                                                    <ListItemContent>
                                                        <Typography level="body-lg" sx={{color: "var(--secondary-color)"}}>{bulletPoint}</Typography>
                                                    </ListItemContent>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </AccordionDetails>
                                }
                            </Accordion>
                        ))}
                    </AccordionGroup>
                </Stack>
            ))}
        </Grid>
    );
}