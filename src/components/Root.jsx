import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home/Home.jsx";
import sections from './sections.jsx';
import NavBar from "./NavBar/NavBar.jsx";

function Root() {

    return <>
        <BrowserRouter>
            <NavBar items={sections}></NavBar>
            <Routes>
                <Route path="/" element={<Home />} />
                {sections
                    .filter(section => section.component)
                    .map(section =>
                        <Route path={section.link}  key={section.name} element={<section.component />} />
                    )

                }
            </Routes>
        </BrowserRouter>
    </>
}

export default Root;