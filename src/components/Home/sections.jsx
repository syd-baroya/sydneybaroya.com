import About from '../About/About.jsx';
import Contact from '../Contact/Contact.jsx';
// import Background from '../Background/Background.jsx';
// import Blog from '../Blog/Blog.jsx';
// import Projects from '../Projects/Projects.jsx';

const SECTIONS = [
    {
        name: "About",
        component: About,
        link: "#about"
    },
    // {
    //     name: "Background",
    //     component: Background,
    //     link: "#background"
    // },
    // {
    //     name: "Projects",
    //     component: Projects,
    //     link: "#projects"
    // },
    // {
    //     name: "Blog",
    //     component: Blog,
    //     link: "/blog"
    // },
    {
        name: "Contact",
        component: Contact,
        link: "#contact"
    }
]   

export default SECTIONS;