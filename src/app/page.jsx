import About from "./about/page";
import HomeSection from "./homeSection";

import { Stack } from "@mui/material";
import WorkSection from "./work/workSection";

export default function Main({}) {
    
    return (
        <Stack id="main" spacing={2}>
            <HomeSection></HomeSection>
            <About></About>
            <WorkSection></WorkSection>
        </Stack>
  );
}
