import { BrowserRouter } from "react-router-dom";
import sections from './sections.jsx';
import NavBar from "./NavBar/NavBar.jsx";
import AppRoutes from "./AppRoutes.jsx";

function Root() {

    return <>
        <BrowserRouter>
            <NavBar items={sections}></NavBar>
            <AppRoutes></AppRoutes>
        </BrowserRouter>
    </>
}

export default Root;