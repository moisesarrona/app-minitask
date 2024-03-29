import { HeaderI } from "../../interfaces/minitask-template/header.interface";

export const HeaderData: HeaderI[] = [
    {
        icon: "bi bi-person-circle",
        name: "Profile",
        url: "/app/user/perfil",
        active: true
    },
    {
        icon: "bi bi-gear",
        name: "Settings",
        url: "/app",
        active: true
    },
    {
        icon: "bi bi-bell",
        name: "Notifications",
        url: "/app",
        active: true
    },    
]