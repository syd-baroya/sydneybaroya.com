import { Routes, Route, useLocation } from 'react-router-dom';
import PROJECT_CARDS from "./Work/projectCards.jsx";
import RootTemplate from './template.jsx';

export default function AppRoutes({sections}) {
  const location = useLocation(); // ✅ this is now safe

  return (
    <Routes location={location}>
            <Route path="/" element={<RootTemplate key={location.pathname} sections={sections}/>} />
            {PROJECT_CARDS
                .filter(project => project.component)
                .map(project =>
                    <Route path={project.link}  key={project.cardTitle} element={<project.component key={location.pathname}/>} />
                )
            }
    </Routes>
  );
}