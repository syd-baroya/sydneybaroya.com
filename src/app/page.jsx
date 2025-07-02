import AboutSection from "./about/aboutSection";
import HomeSection from "./homeSection";

import { Stack } from "@mui/material";
import WorkSection from "./work/workSection";

export default function Main({}) {
    
    return (
        <Stack id="main" spacing={2}>
            <HomeSection></HomeSection>
            <AboutSection></AboutSection>
            <WorkSection></WorkSection>
        </Stack>
  );
}
