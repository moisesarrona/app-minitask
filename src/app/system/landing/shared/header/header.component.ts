import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  public menuArray: any[] = [
    {
      id: 1,
      name: "Home",
      route: "home"
    },
    {
      id: 2,
      name: "About",
      route: "about"
    },
    {
      id: 3,
      name: "Team",
      route: "team"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
