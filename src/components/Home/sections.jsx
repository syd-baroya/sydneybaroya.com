import About from '../About/About.jsx';
import Contact from '../Contact/Contact.jsx';
import Experience from '../Experience/Experience.jsx';
// import Blog from '../Blog/Blog.jsx';
import Projects from '../Projects/Projects.jsx';

const SECTIONS = [
    {
        name: "About",
        id: "about",
        component: About,
        link: "#about"
    },
    {
        name: "Experience",
        id: "experience",
        component: Experience,
        link: "#experience"
    },
    {
        name: "Projects",
        id: "projects",
        component: Projects,
        link: "#projects"
    },
    // {
    //     name: "Blog",
    //     component: Blog,
    //     link: "/blog"
    // },
    {
        name: "Contact",
        id: "contact",
        component: Contact,
        link: "#contact"
    }
]   

export default SECTIONS;