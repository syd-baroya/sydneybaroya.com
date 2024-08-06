
const ABOUT_SECTIONS = [
        { title: "Expertise", color: "var(--fall-background)", value: "e", 
            content: [
                {   
                    title: "3D Computer Graphics",
                    content: {isA: "text", guts: "Passionate about creating immersive 3D projects including real-time simulations, visual effects, and game development."}
                },
                {   
                    title: "Front-end Development",
                    content: {isA: "text", guts: "Over 5 years of experience in building and maintaining a website."}
                }
            ]
        },
        { title: "Skills", color: "var(--summer-background)", value: "s",
            content: [
                {   
                    title: "3D Computer Graphics",
                    content: {isA: "text", guts: "OpenGL, C++, GLSL, C#, HLSL. Learning Vulcan."}
                },
                {   
                    title: "Front-end Development",
                    content: {isA: "text", guts: "Javascript, Java, Vue.js, CSS, HTML. Learning ReactJS with this website."}
                }
            ]
        },
        { title: "Hobbies", color: "var(--spring-background)", value: "h",
            content: [ 
                {  
                    title: "Snowboarding", content: {isA: "image", guts: '/images/snow.JPG', ratio: '9/16'}
                },
                {
                    title: "Surfing", content: {isA: "image", guts: '/images/surf.JPG', ratio: '4/3'}
                },
                {
                    title: "Tinkering with code", content: {isA: "image", guts: '/images/code.JPG', ratio: '3/4'}
                }
            ]
        }
    ];

export default ABOUT_SECTIONS;