import { ContentI } from "../interface/content.interface";

export const AboutData: ContentI[] = [
    {
        id: 1,
        title: "About App",
        subtitle: "human or Developer?",
        description: "Wow!, your are interested in my app, but, are you developer? or user? this questions are to provide correct information, I only show information don't panic!",
        button: {
            status: true,
            text: "Let's go!",
            link: ""
        },
        items: [
            { title: "taks" },
            { title: "organize" },
            { title: "web app" },
            { title: "schedule" },
            { title: "time" },
            { title: "contibute" },
        ]
    },
    {
        id: 2,
        title: "To humans",
        subtitle: "Do you use the app?",
        description: "You can use the application for free, if you want to donate you can do it, but it is not mandatory. Let's Go",
        button: {
            status: false,
            text: "...",
            link: ""
        },
        items: [
            {
                title: "Create, organize tasks",
                description: "You can create task to remmeber and organize your time.",
                icon: "bi bi-list-task"
            },
            {
                title: "Priorize tasks",
                description: "Priorize your tasks all time.",
                icon: "bi bi-journal-arrow-down"
            },
            {
                title: "Schedule tasks",
                description: "You schedule tasks that are frequent.",
                icon: "bi bi-clock-history"
            }
        ],
    },
    {
        id: 2,
        title: "To developers",
        subtitle: "are you a contributor?",
        description: "Oh yes, you are a developer, you can contribute to this project, fix bugs or add new features. this project is written in Angular 13 using Bootstrap 5 to build the UI, but in the future we will write custom styling in CSS.",
        button: {
            status: false,
            text: "...",
            link: ""
        },
        items: [
            {
                title: "Frontend",
                description: "Write code for users, i believe in your work and imagination.",
                icon: "bi bi-github"
            },
            {
                title: "Techologies",
                description: "Angular 13, Bootstrap 5, BootsWatch 5, (In future only CSS)",
                icon: "bi bi-tools"
            },
        ],
    },
    {
        id: 3,
        title: "Ecosystem",
        subtitle: "Where is the Backend?",
        description: "This application needs a backend to work, the backend is written in Java Spring Boot, yes Java, help me write the backend to add your ideas, this need grows.",
        button: {
            status: false,
            text: "...",
            link: ""
        },
        items: [
            {
                title: "Backend",
                description: "This app needs a backend to work, the backend provides the data, functions and services, you cand help me?",
                icon: "bi bi-github"
            },
            {
                title: "Techologies",
                description: "Java, SpringBoot, SpringCloud, Microservices",
                icon: "bi bi-tools"
            },
        ],
    },
]