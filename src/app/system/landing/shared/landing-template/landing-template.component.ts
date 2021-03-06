import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-template',
  templateUrl: './landing-template.component.html',
})
export class LandingTemplateComponent implements OnInit {

  public themeDark: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.themeDark = localStorage.getItem('landing-theme')? true : false
  }

  public changeTheme = (data: boolean): any => {
    data? localStorage.setItem('landing-theme', 'dark') : localStorage.removeItem('landing-theme')
    this.themeDark = data
  }

}
