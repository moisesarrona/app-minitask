import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
})
export class TeamComponent implements OnInit {

  public dataSection: any[] = [
    {
      id: 1,
      title: "Our Team",
      subtitle: "we are developers",
      description: "We are humans, developers, and love write code, this is amazing!",
      button: {
        status: true,
        text: "Write code!",
        link: ""
      },
      items:[
        {title: "code"},
        {title: "human"},
        {title: "write"},
        {title: "team"},
        {title: "senior"},
        {title: "contibute"},
      ]
    },
    {
      id: 2,
      title: "We're core team",
      subtitle: "We're Seniors!",
      description: "Our job is mantain code from app-minitask, fixed bug added functions and create new features and create new projects for you <3.",
      button: {
        status: false,
        text: "...",
        link: ""
      },
      items: [
        { 
          title: "@moisesarrona", 
          description: "I am software engineer, to creator of app-minitask.", 
          icon: "https://avatars.githubusercontent.com/u/57106162?v=4"
        },
        { 
          title: "@mybot", 
          description: "I am bot developer, i need to mantain code and fix bugs.", 
          icon: "https://avatars.githubusercontent.com/u/27347476?s=280&v=4"
        }
      ],
    },
    {
      id: 3,
      title: "Our comunnity",
      subtitle: "We're Pro and Seniors",
      description: "These humans are amazing, they help improve, they add things, they do a good job, this app is amazing because of them.",
      button: {
        status: false,
        text: "...",
        link: ""
      },
      items: [
        { 
          title: "Anonimous", 
          description: "We are anonimous.", 
          icon: "..."
        }
      ],
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
