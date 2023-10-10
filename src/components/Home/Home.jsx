import '../../style.css';
import './Home.css';

import Background from "../Scene/Scene.jsx";
import NavBar from '../NavBar/NavBar.jsx';
import homeSections from './sections.jsx';

export default function Home() {
    return ( 
        <div className="home">
            <NavBar items={homeSections}></NavBar>
            <div className='gradient'></div>
            <Background></Background>
            <div className="homeSections">
                {homeSections
                    .filter(section => section.component)
                    .map(section =>
                        <section.component key={section.name} />
                    )

                }
            </div>
        </div>
    );
}