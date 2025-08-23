const PROJECT_DATA = [
    {
        title: "Eye of Metamrophosis",
        subtitle: "Real-time Body Tracking and Projection Mapping in the Interactive Arts",
        paragraphs: [
            "I built a real-time body projection-mapping system for interactive art using Microsoft’s Azure Kinect DK. The system tracks a performer’s skeleton, combines depth data to form a silhouette, and maps textures/animations back onto the moving body to create an immersive effect.",
            "To reduce occlusion and improve precision, multiple Azure Kinects are synchronized. I average joint angles across devices and apply a 2D coordinate rotation through the skeleton hierarchy to stabilize motion.",
            "To cut latency, I predict joint positions 10 ms into the future using recent velocities from each joint and its neighbors. Predicted joints drive billboards that approximate body segments for closer alignment to the silhouette.",
            "A lightweight gesture layer lets participants switch effects: wave left/right or raise both hands to cycle between ‘skin’ textures (e.g., chameleon) and animation effects. A simple state machine updates the projection when gestures are detected.",
            "The work was exhibited at Burning Man 2019 and an adaptation of the project was presented at ‘Delfines de San Carlos 2020: Un Proyecto de Esperanza’. More information about the latter project is in the project page '",
            { type: 'link', text: 'Delfines', href: '/work/projects/delfines' },
            "'. I compared one-, two-, and three-device setups and documented outline overlaps and joint-angle/variance plots."
        ],
        thumbnail: "/images/butterEye.png",
        galleryImages: [
            { src: "/images/thesisBurnAway.gif", alt: "Burn Away Effect" },
            { src: "/images/thesisButterEye.gif", alt: "Butterfly Eye Effect" },
            { src: "/images/thesisChameleon.gif", alt: "Chameleon Effect" },
            { src: "/images/thesisSkeleton.gif", alt: "Skeleton Effect" }
        ],
        midImages: [
            // { src: "/images/butterEye.png", alt: "A close-up of the projection." }
        ],
        slug: "eye-of-metamorphosis",
        tech: "C++, OpenGL, GLSL, Azure Kinect DKs",
    },
    {
        title: "Delfines",
        subtitle: "Interactive Dolphin Simulation",
        paragraphs: [
            "Delfines 2020 expanded on the real-time tracking and projection mapping system to create a fully interactive installation where audience members became performers. Participants could step into a reactive space where their movements generated waves of light and fluid, abstract visuals, transforming physical motion into digital art.",
            "For Delfines, the system was adapted to support multiple simultaneous users. This required optimizing skeletal tracking algorithms to handle overlapping bodies, implementing a smoothing filter to avoid jitter, and introducing adaptive projection mapping techniques to account for varied participant heights and positions within the installation.",
            "A major technical challenge involved ensuring the installation worked reliably in a non-controlled, public environment. To address this, I developed robust calibration tools to adapt the projection to unconventional surfaces and changing ambient lighting conditions, ensuring the visuals remained vibrant and accurate.",
            "Delfines 2020 was showcased as part of a larger art event and received positive audience feedback for its ability to merge technology and play, demonstrating how motion-tracking technologies can foster shared, embodied experiences beyond the stage."
        ],
        thumbnail: "/images/dolphin.png",
        galleryImages: [
            { src: "/images/dolphinButterEye.gif", alt: "Dolphin with butterfly eyes." }
        ],
        midImages: [
            // { src: "/images/dolphin.png", alt: "A dolphin swimming." }
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
        thumbnail: "/images/flames.png",
        galleryImages: [
            { src: "/images/2dRayTracer.gif", alt: "A ray-traced image of a flame." }
        ],
        midImages: [
            // { src: "/images/flames.png", alt: "A close-up of the flame." }
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