import About from './About/About.jsx';
import Contact from './Contact/Contact.jsx';
// import Background from '../Background/Background.jsx';
// import Blog from '../Blog/Blog.jsx';
import Work from './Work/Work.jsx';

const SECTIONS = [
    {
        name: "About",
        component: About,
        link: "/about"
    },
    // {
    //     name: "Background",
    //     component: Background,
    //     link: "#background"
    // },
    {
        name: "Work",
        component: Work,
        link: "/work"
    },
    // {
    //     name: "Blog",
    //     component: Blog,
    //     link: "/blog"
    // },
    {
        name: "Contact",
        component: Contact,
        link: "/contact"
    }
]   

export default SECTIONS;