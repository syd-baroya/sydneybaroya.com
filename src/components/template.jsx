import Home from "./Home/Home.jsx";

export default function RootTemplate({sections}) {
   
    return (
        <div>
            <Home></Home>
            {sections
                .filter(section => section.component)
                .map(section =>
                    <section.component key={section.name} />
                )
            }
        </div>
    );
}