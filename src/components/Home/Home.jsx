import '../../style.css';
import Background from "../Scene/Scene.jsx";
import Header from '../Header/Header.jsx';
import homeSections from './sections.jsx';

export default function Home() {
    return ( 
        <div>
            <Header items={homeSections}></Header>
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