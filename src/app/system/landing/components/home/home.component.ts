import { Component, OnInit } from '@angular/core';
import { ContentI } from '../../models/content.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public dataSection: ContentI[] = [
    {
      id: 1,
      title: "Minitask",
      subtitle: "Our app",
      description: "Hi human, I'm Moises Arrona and I'm software engineer, this is my mini app to organize task, yes ORGANIZE, scroll down to know more...",
      button: {
        status: true,
        text: "Let's go!",
        link: ""
      },
      items: [
        { title: "taks" },
        { title: "organize" },
        { title: "web app" },
        { title: "team" },
        { title: "time" }
      ]
    },
    {
      id: 2,
      title: "Know more...",
      subtitle: "You read",
      description: "Well, this app was created to record my activities throughout the day, and to know the progress of each task, and I'm sorry, my English is so bad, but you understand, right?.",
      button: {
        status: false,
        text: "...",
        link: ""
      },
      items: [
        {
          title: "Organize",
          description: "...",
          icon: "bi bi-sort-alpha-down"
        },
        {
          title: "Time",
          description: "...",
          icon: "bi bi-alarm"
        },
        {
          title: "Practice",
          description: "...",
          icon: "bi bi-play-btn"
        }
      ],
    },
    {
      id: 3,
      title: "Web app",
      subtitle: "Milti plataform?",
      description: "Well, well, at the moment I am working on a web application, but I think I will create a mobile application and a desktop application, but for now only the web application, wait for the future.",
      button: {
        status: false,
        text: "...",
        link: ""
      },
      items: [
        {
          title: "Web app",
          description: "...",
          icon: "bi bi-window-stack"
        },
        {
          title: "Mobile app",
          description: "...",
          icon: "bi bi-phone"
        },
        {
          title: "Desktop app",
          description: "...",
          icon: "bi bi-laptop"
        }
      ],
    },
    {
      id: 4,
      title: "More data",
      subtitle: "You read more",
      description: "Human, this app is still under development. I write the code for this project, in fact the source code is on GitHub, give me a start or help me write the code, you decide.",
      button: {
        status: false,
        text: "...",
        link: ""
      },
      items: [
        {
          title: "Code",
          description: "...",
          icon: "bi bi-code"
        },
        {
          title: "Team",
          description: "...",
          icon: "bi bi-people"
        },
        {
          title: "Version",
          description: "...",
          icon: "bi bi-git"
        }
      ],
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
