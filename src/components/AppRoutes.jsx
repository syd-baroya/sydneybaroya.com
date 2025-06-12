import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./Home/Home.jsx";
import sections from './sections.jsx';
import PROJECT_CARDS from "./Work/projectCards.jsx";

export default function AppRoutes() {
  const location = useLocation(); // ✅ this is now safe

  return (
    <Routes location={location}>
            <Route path="/" element={<Home key={location.pathname}/>} />
            {sections
                .filter(section => section.component)
                .map(section =>
                    <Route path={section.link}  key={section.name} element={<section.component key={location.pathname}/>} />
                )
            }
            {PROJECT_CARDS
                .filter(project => project.component)
                .map(project =>
                    <Route path={project.link}  key={project.cardTitle} element={<project.component key={location.pathname}/>} />
                )
            }
    </Routes>
  );
}