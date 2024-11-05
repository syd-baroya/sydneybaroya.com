import About from '../About/About.jsx';
import Contact from '../Contact/Contact.jsx';
import Experience from '../Experience/Experience.jsx';
// import Blog from '../Blog/Blog.jsx';
import Projects from '../Projects/Projects.jsx';

const SECTIONS = [
    {
        name: "About",
        component: About,
        link: "#about"
    },
    {
        name: "Experience",
        component: Experience,
        link: "#experience"
    },
    {
        name: "Projects",
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
        component: Contact,
        link: "#contact"
    }
]   

export default SECTIONS;