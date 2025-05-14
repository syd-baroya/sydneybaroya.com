import {Typography, Stack} from "@mui/material";

import '../../style.css';
import './Home.css';

import Scene from "../Scene/Scene.jsx";
import NavBar from '../NavBar/NavBar.jsx';
import sections from './sections.jsx';

export default function Home() {
    return ( 
        <div className="home">
            <NavBar items={sections}></NavBar>
            <Scene></Scene>
            <div className="sections">
                <div className='section' id="home" style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <Stack direction="column" spacing={2} sx={{ justifyContent: "center", alignItems: "center"}}>                    
                        {/* <Typography textAlign="center" level='h2' sx={{ color: 'var(--primary-text)'}}>{"Sydney Baroya"}</Typography>
                        <Typography textAlign="center" level='h1' sx={{ color: 'var(--primary-text)'}}>{"Portfolio"}</Typography> */}
                        <Typography level="h1">h1: Lorem ipsum</Typography>
                    </Stack>
                    <div className='view' style={{height: '75vh', width: '100%'}}></div>
                </div>
                {sections
                    .filter(section => section.component)
                    .map(section =>
                        <section.component key={section.name} />
                    )

                }
            </div>
        </div>
    );
}