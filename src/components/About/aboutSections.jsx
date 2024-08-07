const EXPERTISE_SECTION = { 
    title: "Expertise", color: "var(--fall-background)", value: "e", 
    content: [
        {   
            title: "3D Computer Graphics",
            icon: "fa-solid fa-cube",
            content: "Passionate about creating immersive 3D projects including real-time simulations, visual effects, and game development."
        },
        {   
            title: "Front-end Web Development",
            icon: "fa-solid fa-desktop",
            content: "Over 5 years of experience in building and maintaining a website."
        }
    ]
};

const SKILLS_SECTION = { 
    title: "Skills", color: "var(--summer-background)", value: "s",
    content: [
        {   
            title: "3D Computer Graphics",
            content: "OpenGL, C++, GLSL, C#, HLSL. Learning Vulcan."
        },
        {   
            title: "Front-end Web Development",
            content: "Javascript, Java, Vue.js, CSS, HTML. Learning ReactJS with this website."
        }
    ]
};

const HOBBIES_SECTION = { 
    title: "Hobbies", color: "var(--spring-background)", value: "h",
    content: [ 
        {  
            title: "Snowboarding", content: '/images/snow.JPG', ratio: '9/16'
        },
        {
            title: "Surfing", content: '/images/surf.JPG', ratio: '4/3'
        },
        {
            title: "Tinkering with code", content: '/images/code.JPG', ratio: '3/4'
        }
    ]
};

export { EXPERTISE_SECTION, SKILLS_SECTION, HOBBIES_SECTION };