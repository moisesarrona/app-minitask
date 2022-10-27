import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minitask-auth-template',
  templateUrl: './minitask-auth-template.component.html',
})
export class MinitaskAuthTemplateComponent implements OnInit {

  public authShow: boolean = true

  constructor() { }
  public themeDark: boolean = false;

  ngOnInit(): void {
    this.themeDark = localStorage.getItem('landing-theme')? true : false
  }

  public showAuthEvent = ():void => {
    this.authShow = !this.authShow
  }

  public changeTheme = (data: boolean): any => {
    data? localStorage.setItem('landing-theme', 'dark') : localStorage.removeItem('landing-theme')
    this.themeDark = data
  }
}
