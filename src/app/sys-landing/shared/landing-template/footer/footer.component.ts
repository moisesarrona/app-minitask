import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  public dataFooter: any[] = [
    {
      id: 1,
      title: 'Cummunity',
      description: '...',
      child: [
        {
          name: 'Github',
          link: '#',
        },
        {
          name: 'Twitter',
          link: '#',
        }
      ]
    },
    {
      id: 2,
      title: 'Legal',
      description: '...',
      child: [
        {
          name: 'Privacy',
          link: '#',
        },
        {
          name: 'Cookies',
          link: '#',
        },
        {
          name: 'Terms and Conditions',
          link: '#',
        },
        {
          name: 'Open Source',
          link: '#',
        }
    
      ]
    },
    {
      id: 3,
      title: 'Projects',
      description: '...',
      child: [
        {
          name: 'app-minitask',
          link: '#',
        },
        {
          name: 'api-minitask',
          link: '#',
        }    
      ]
    }
  ]

  public dataWords: any[] = [
    { title: "taks" },
    { title: "organize" },
    { title: "web app" },
    { title: "schedule" },
    { title: "time" },
    { title: "contibute" },
    { title: "code" },
    { title: "human" },
    { title: "write" },
    { title: "team" },
    { title: "senior" },
    { title: "contibute" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
