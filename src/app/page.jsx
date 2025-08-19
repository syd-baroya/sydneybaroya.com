import AboutSection from "./about/aboutSection";
import HomeSection from "./homeSection";

import { Stack } from "@mui/material";
import WorkSection from "./work/workSection";

export default function Main({}) {
    
    return (
        <Stack id="main" spacing={2}>
            <HomeSection></HomeSection>
            <Stack spacing={8} sx={{paddingBottom: '5%', minHeight: '60vh', justifyContent: 'space-evenly', background: 'var(--background-color)', zIndex: 10, position: 'relative', boxShadow: '0px 70px 60px rgba(0, 0, 0, 0.5)'}}>
                <AboutSection></AboutSection>
                <WorkSection></WorkSection>
            </Stack>
        </Stack>
  );
}
