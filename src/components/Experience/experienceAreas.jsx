import { Link } from "@mui/joy";

const EXPERIENCE_AREAS = [
    {
        title: "Work",
        items: [
            {
                org: "CACI",
                icon: "fa-solid fa-rocket",
                title: "Software Engineer II",
                date: "June 2019 - Present",
                specialLines: [],
                content: [
                    "Optimize 3D rocket launch simulation displays to decrease lag, increasing customer satisfaction with usability ",
                    "Coordinate with the UI/UX team member to create HUD UI for the 3D simulated rocket launch display",
                    "Manage an innovative software team focused on enhancing and generating new 3D displays to portray more information to the customer",
                    "Create and update web-based displays critical for disseminating real-time launch information",
                    "Provide technical support of launch display systems during critical space launches and operations for industry leaders such as SpaceX and ULA",
                ]
            },
            {
                org: "Cal Poly SLO",
                icon: "fa-solid fa-chalkboard-user",
                title: "Computer Graphics Graduate TA",
                date: "Sept - December 2020",
                specialLines: [],
                content: [" Facilitated instruction and provided comprehensive assistance to graduate-level students in the Computer Graphics program at Cal Poly ",
                    "Evaluated and graded complex 3D graphics projects and assessments, ensuring adherence to rigorous academic standards"
                ]
            }
        ]
    },
    {
        title: "Education",
        items: [
            {
                org: "Cal Poly SLO",
                icon: "fa-solid fa-graduation-cap",
                title: "Master of Science in Computer Science",
                date: "2019 - 2020",
                specialLines: [
                    {
                        before: "Thesis: ",
                        line: () => {return(<Link rel="noopener noreferrer" target="_blank" href='https://digitalcommons.calpoly.edu/theses/2250/' level='body-lg' underline='always' variant="plain" sx={{color: "var(--tertiary-text)", textDecorationColor: 'var(--tertiary-text)'}}>Real-Time Body Tracking and Projection Mapping in the Interactive Arts</Link>)},
                        after: "",
                    }
                ],
                content: [
                    "Implemented parallel programming techniques to optimize real-time body tracking algorithms, utilizing an array of Microsoft Azure’s Kinect DK trackers",
                    "Presented at Burning Man 2019 and Delfines 2020 as art installations, showcasing expertise in melding art with technology."
                ]
            },
            {
                org: "Cal Poly SLO",
                icon: "fa-solid fa-graduation-cap",
                title: "Bachelor of Science in Software Engineering",
                date: "2015 - 2019",
                specialLines: [],
                content: []
            }
        ]
    }
];

export default EXPERIENCE_AREAS;