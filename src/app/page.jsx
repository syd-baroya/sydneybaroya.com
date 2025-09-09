import AboutSection from "@/components/page-sections/AboutSection";
import LandingSection from "@/components/page-sections/LandingSection";

import { Stack } from "@mui/material";
import WorkSection from "@/components/page-sections/WorkSection";

export const metadata = {
  title: 'Sydney Baroya - Portfolio & Creative Developer',
  description: 'Explore the portfolio of Sydney Baroya, a creative developer showcasing projects in web development, graphics, and interactive experiences.',
};

export default function Main({}) {
    
    return (
        <Stack id="main" spacing={2} sx={{position: 'relative', marginTop: '6vh' // for navbar
        }}> 
            <LandingSection></LandingSection>
            <Stack spacing={8} sx={{paddingBottom: '5%', background: 'var(--background-color)', zIndex: 10, position: 'relative', boxShadow: '0px 70px 60px rgba(0, 0, 0, 0.5)'}}>
                <AboutSection></AboutSection>
                <WorkSection></WorkSection>
            </Stack>
        </Stack>
  );
}
