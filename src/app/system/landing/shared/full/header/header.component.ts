import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() themeSelection = new EventEmitter<any>();

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
    },
    {
      id: 3,
      name: "Contact",
      route: "contact"
    }
  ]
  public themeDark: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public changeTheme = ():void => {
    this.themeDark = !this.themeDark;
    this.themeSelection.emit(this.themeDark)
  }

}
