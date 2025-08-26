
const projects = [
    {
        title: "Eye of Metamrophosis",
        subtitle: "Real-time Body Tracking and Projection Mapping in the Interactive Arts",
        thumbnail: "/images/butterEye.png",
        galleryImages: [
            { src: "/images/thesisBurnAway.gif", alt: "Burn Away Effect" },
            { src: "/images/thesisButterEye.gif", alt: "Butterfly Eye Effect" },
            { src: "/images/thesisChameleon.gif", alt: "Chameleon Effect" },
            { src: "/images/thesisSkeleton.gif", alt: "Skeleton Effect" }
        ],
        slug: "eye-of-metamorphosis",
        tech: "C++, OpenGL, GLSL, Azure Kinect DKs",
        mdxFile: "eye-of-metamorphosis.mdx"
    },
    {
        title: "2D Ray Tracer",
        subtitle: "A simple ray tracer built from scratch.",
        thumbnail: "/images/flames.png",
        galleryImages: [
            { src: "/images/2dRayTracer.gif", alt: "A ray-traced image of a flame." }
        ],
        slug: "2d-ray-tracer",
        tech: "C++, OpenGL, GLSL",
        mdxFile: "2d-ray-tracer.mdx"
    },
];

export default projects;