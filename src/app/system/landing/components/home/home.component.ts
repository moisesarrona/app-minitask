import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public dataSection: any[] = [
    {
      id: 1,
      title: "Minitask",
      subtitle: "Our app",
      description: "Hi, human, I'm Moises Arrona and I'm software engineer, this is my app to organize task, scroll down to know more...",
      button: {
        status: true,
        text: "Let's go!"
      }
    },
    {
      id: 2,
      title: "Know more...",
      subtitle: "You read",
      description: "Well, this app was created to register my activities in all day, and know to the progress each task, and sorry my english so bad, but you understand.",
      button: {
        status: false,
        text: "..."
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
      title: "More data",
      subtitle: "You read more",
      description: "Human, this app is still under development. I write code for this project, in fact the source code is on GitHub, give me one start or help me write code, your decition.",
      button: {
        status: false,
        text: "..."
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
