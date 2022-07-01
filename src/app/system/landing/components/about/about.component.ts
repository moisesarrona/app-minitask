import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  public dataSection: any[] = [
    {
      id: 1,
      title: "About App",
      subtitle: "human or robot?",
      description: "Wow!, your are interested in my app, but, are you developer? or user? this questions are to provide correct information, I only show information don't panic!",
      button: {
        status: true,
        text: "Let's go!",
        link: ""
      }
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
          title: "Create, organize, and track tasks", 
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
          title: "Contribute", 
          description: "Let's Go, write code!", 
          icon: "bi bi-github"
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
          title: "Contribute", 
          description: "Let's Go, write code!", 
          icon: "bi bi-github"
        },
      ],
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
