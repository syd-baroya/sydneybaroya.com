import {Typography, Stack, Box} from "@mui/material";

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
                <Box sx={{ width: '100%' }}>
                        <Typography textAlign="center" variant='h2' sx={{ color: 'var(--primary-text)'}}>{"Sydney Baroya"}</Typography>
                        <Typography textAlign="center" variant='h1' sx={{ color: 'var(--primary-text)'}}>{"Portfolio"}</Typography>
                    </Box>
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