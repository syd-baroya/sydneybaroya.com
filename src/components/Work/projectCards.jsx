import ProjectPage from "./projectPage";

const PROJECT_CARDS = [
    {
        cardTitle: "Eye of Metamrophosis",
        title: "Real-time Body Tracking and Projection Mapping in the Interactive Arts",
        info: "My master's thesis project. I reasearched ways to make body mapping projection more accurate and efficient, in the interactive arts space. The project used Microsoft Azure Kinect DKs for body tracking, and was presented at Burning Man 2019.",
        gif: ["/images/thesisBurnAway.gif", "/images/thesisButterEye.gif", "/images/thesisChameleon.gif", "/images/thesisSkeleton.gif"],
        img: ["/images/butterEye.png"],
        link: "/projectPage",
        component: ProjectPage
    },
    {
        cardTitle: "Delfines",
        title: "Project 2",
        info: "Project 2 info",
        gif: ["/images/dolphinButterEye.gif"],
        img: ["/images/dolphin.png"],
        link: "/projectPage",
        component: ProjectPage
    },
    {
        cardTitle: "2D Ray Tracer",
        title: "Project 3",
        info: "Project 3 info",
        gif: ["/images/2dRayTracer.gif"],
        img: ["/images/flames.png"],
        link: "/projectPage",
        component: ProjectPage
    }
];

//TODO clicking project link and then going back to the work page doesn't render the scene but the canvas is being drawn

export default PROJECT_CARDS;