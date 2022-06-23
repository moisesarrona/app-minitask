import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
})
export class TeamComponent implements OnInit {

  public coreTeam: any[] = [
    {
      name: 'moisesarrona',
      description: 'i am software engineer',
      image: 'https://avatars.githubusercontent.com/u/57106162?v=4'
    },
    {
      name: 'mybot',
      description: 'i am bot haha',
      image: 'https://avatars.githubusercontent.com/u/27347476?s=280&v=4'
    }
  ]

  public ourTem: any[] = [

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
