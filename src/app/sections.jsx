import About from './about/page.jsx';
// import Background from '../Background/Background.jsx';
// import Blog from '../Blog/Blog.jsx';
import Work from './work/page.jsx';

const SECTIONS = [
    {
        name: "About",
        component: About,
        link: "about"
    },
    // {
    //     name: "Background",
    //     component: Background,
    //     link: "#background"
    // },
    {
        name: "Work",
        component: Work,
        link: "work"
    },
    // {
    //     name: "Blog",
    //     component: Blog,
    //     link: "/blog"
    // },
]   

export default SECTIONS;