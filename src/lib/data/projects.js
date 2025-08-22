const PROJECT_DATA = [
    {
        title: "Eye of Metamrophosis",
        subtitle: "Real-time Body Tracking and Projection Mapping in the Interactive Arts",
        paragraphs: [
            "My master's thesis project. I researched ways to make body mapping projection more accurate and efficient, in the interactive arts space. The project used Microsoft Azure Kinect DKs for body tracking, and was presented at Burning Man 2019.",
            "This is the second paragraph.",
            "This is the third paragraph.",
            "This is the fourth paragraph."
        ],
        thumbnail: "butterEye.png",
        galleryImages: [
            { src: "/images/thesisBurnAway.gif", alt: "Burn Away Effect" },
            { src: "/images/thesisButterEye.gif", alt: "Butterfly Eye Effect" },
            { src: "/images/thesisChameleon.gif", alt: "Chameleon Effect" },
            { src: "/images/thesisSkeleton.gif", alt: "Skeleton Effect" }
        ],
        midImages: [
            { src: "/images/butterEye.png", alt: "A close-up of the projection." }
        ],
        slug: "eye-of-metamorphosis",
        tech: "C++, OpenGL, GLSL, Azure Kinect DKs",
    },
    {
        title: "Delfines",
        subtitle: "Interactive Dolphin Simulation",
        paragraphs: [
            "An interactive simulation where users can swim with dolphins.",
            "The environment is procedurally generated.",
            "Users can interact with the dolphins using hand gestures."
        ],
        thumbnail: "dolphin.png",
        galleryImages: [
            { src: "/images/dolphinButterEye.gif", alt: "Dolphin with butterfly eyes." }
        ],
        midImages: [
            { src: "/images/dolphin.png", alt: "A dolphin swimming." }
        ],
        slug: "delfines",
        tech: "Unity, C#, HLSL, Azure Kinect DKs",
    },
    {
        title: "2D Ray Tracer",
        subtitle: "A simple ray tracer built from scratch.",
        paragraphs: [
            "A ray tracer implemented in C++.",
            "It supports basic shapes and lighting.",
            "The project was a learning exercise in computer graphics.",
            "It was a lot of fun to build."
        ],
        thumbnail: "flames.png",
        galleryImages: [
            { src: "/images/2dRayTracer.gif", alt: "A ray-traced image of a flame." }
        ],
        midImages: [
            { src: "/images/flames.png", alt: "A close-up of the flame." }
        ],
        slug: "2d-ray-tracer",
        tech: "C++, OpenGL, GLSL"
    },
    // {
    //     name: "Eye of Metamrophosis",
    //     title: "Real-time Body Tracking and Projection Mapping in the Interactive Arts",
    //     info: "My master's thesis project. I reasearched ways to make body mapping projection more accurate and efficient, in the interactive arts space. The project used Microsoft Azure Kinect DKs for body tracking, and was presented at Burning Man 2019.",
    //     gif: ["thesisBurnAway.gif", "thesisButterEye.gif", "thesisChameleon.gif", "thesisSkeleton.gif"],
    //     img: ["butterEye.png"],
    //     slug: "eye-of-metamrophosis2",
    //     tech: "C++, OpenGL, GLSL, Azure Kinect DKs",
    // },
    // {
    //     name: "Delfines",
    //     title: "Project 2",
    //     info: "Project 2 info",
    //     gif: ["dolphinButterEye.gif"],
    //     img: ["dolphin.png"],
    //     slug: "delfines2",
    //     tech: "Unity, C#, HLSL, Azure Kinect DKs",
    // },
    // {
    //     name: "2D Ray Tracer",
    //     title: "Project 3",
    //     info: "Project 3 info",
    //     gif: ["2dRayTracer.gif"],
    //     img: ["flames.png"],
    //     slug: "2d-ray-tracer2",
    //     tech: "C++, OpenGL, GLSL"
    // },  
    // {
    //     name: "Eye of Metamrophosis",
    //     title: "Real-time Body Tracking and Projection Mapping in the Interactive Arts",
    //     info: "My master's thesis project. I reasearched ways to make body mapping projection more accurate and efficient, in the interactive arts space. The project used Microsoft Azure Kinect DKs for body tracking, and was presented at Burning Man 2019.",
    //     gif: ["thesisBurnAway.gif", "thesisButterEye.gif", "thesisChameleon.gif", "thesisSkeleton.gif"],
    //     img: ["butterEye.png"],
    //     slug: "eye-of-metamrophosis3",
    //     tech: "C++, OpenGL, GLSL, Azure Kinect DKs",
    // },
    // {
    //     name: "Delfines",
    //     title: "Project 2",
    //     info: "Project 2 info",
    //     gif: ["dolphinButterEye.gif"],
    //     img: ["dolphin.png"],
    //     slug: "delfines3",
    //     tech: "Unity, C#, HLSL, Azure Kinect DKs",
    // },
    // {
    //     name: "2D Ray Tracer",
    //     title: "Project 3",
    //     info: "Project 3 info",
    //     gif: ["2dRayTracer.gif"],
    //     img: ["flames.png"],
    //     slug: "2d-ray-tracer3",
    //     tech: "C++, OpenGL, GLSL"
    // },
    // {
    //     name: "Eye of Metamrophosis",
    //     title: "Real-time Body Tracking and Projection Mapping in the Interactive Arts",
    //     info: "My master's thesis project. I reasearched ways to make body mapping projection more accurate and efficient, in the interactive arts space. The project used Microsoft Azure Kinect DKs for body tracking, and was presented at Burning Man 2019.",
    //     gif: ["thesisBurnAway.gif", "thesisButterEye.gif", "thesisChameleon.gif", "thesisSkeleton.gif"],
    //     img: ["butterEye.png"],
    //     slug: "eye-of-metamrophosis4",
    //     tech: "C++, OpenGL, GLSL, Azure Kinect DKs",
    // },
    // {
    //     name: "Delfines",
    //     title: "Project 2",
    //     info: "Project 2 info",
    //     gif: ["dolphinButterEye.gif"],
    //     img: ["dolphin.png"],
    //     slug: "delfines4",
    //     tech: "Unity, C#, HLSL, Azure Kinect DKs",
    // },
    // {
    //     name: "2D Ray Tracer",
    //     title: "Project 3",
    //     info: "Project 3 info",
    //     gif: ["2dRayTracer.gif"],
    //     img: ["flames.png"],
    //     slug: "2d-ray-tracer4",
    //     tech: "C++, OpenGL, GLSL"
    // },
];

//TODO clicking project link and then going back to the work page doesn't render the scene but the canvas is being drawn

export default PROJECT_DATA;