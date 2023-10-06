import '../../style.css';
import Background from "../Scene/Scene.jsx";
import NavBar from '../NavBar/NavBar.jsx';
import homeSections from './sections.jsx';

export default function Home() {
    return ( 
        <div>
            <NavBar items={homeSections}></NavBar>
            <Background></Background>
            {homeSections
                .filter(section => section.component)
                .map(section =>
                    <div key={section.name} >
                        <section.component />
                    </div>
                )

            }
        </div>
    );
}