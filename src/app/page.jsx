import About from "./about/page";
import Home from "./home/page";
import Work from "./work/page";

import { Stack } from "@mui/material";

export default function Main({}) {
    
    return (
        <Stack id="main" spacing={2}>
            <Home></Home>
            <About></About>
            <Work></Work>
        </Stack>
  );
}
