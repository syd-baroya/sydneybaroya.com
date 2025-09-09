
const projects = [
    {
        title: "Building My Portfolio",
        thumbnail: "/images/website.png",
        slug: "this-website",
        mdxFile: "this-website.mdx",
        description: "A deep dive into the technical choices and challenges behind building this very website. Built with Next.js, it features custom Three.js integrations for interactive 3D elements, all implemented without the use of `react-three-fiber`. This approach allowed for fine-grained control over the Three.js lifecycle and direct manipulation of the WebGL context."
    },
    {
        title: "Shader Playground",
        thumbnail: "/images/waterShader.png",
        slug: "shader-playground",
        mdxFile: "shader-playground.mdx",
        description: "Shader Playground is a tool designed to bridge the gap between native OpenGL and web-based Three.js shader development. It provides a unified environment for writing, visualizing, and testing shaders, enabling developers to seamlessly transition between the two platforms."
    },
    {
        title: "OpenGL Template",
        thumbnail: "/images/dolphin.png",
        slug: "opengl-template",
        mdxFile: "opengl-template.mdx",
        description: "Frustrated with bloated and monolithic starter code during my studies, I created this OpenGL project template to streamline the development of new graphics applications. It provides a clean, modular, and easy-to-build foundation for any new OpenGL project."
    },
    {
        title: "Projection Mapping in the Interactive Arts",
        thumbnail: "/images/butterEye.png",
        slug: "eye-of-metamorphosis",
        mdxFile: "eye-of-metamorphosis.mdx",
        description: "This project, the centerpiece of my Master's thesis, explored enhancing real-time body tracking and projection mapping for interactive art. Using depth-sensing cameras and custom software, the installation allowed participants' movements to generate dynamic visuals on large-scale surfaces, blurring the line between audience and performer. The work was featured in two major interactive art installations."
    },
    {
        title: "2D Ray Tracer",
        thumbnail: "/images/flames.png",
        slug: "2d-ray-tracer",
        mdxFile: "2d-ray-tracer.mdx",
        description: "As my senior project for my Software Engineering degree, I developed a real-time 2D ray tracer to explore and adapt advanced 3D rendering techniques to a 2D environment. The primary goal was to deepen my understanding of GPU programming and rendering pipelines."
    },
];

export default projects;