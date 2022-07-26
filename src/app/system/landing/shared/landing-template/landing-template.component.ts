import { Component, OnInit } from '@angular/core';
import { ToastI } from '../../models/toast.interface';

@Component({
  selector: 'app-landing-template',
  templateUrl: './landing-template.component.html',
})
export class LandingTemplateComponent implements OnInit {

  public themeDark: boolean = false;
  public dataToast: ToastI = {
    title: "Welcome!",
    description: "This landing contains secrets, so be careful!",
    time: new Date()
  }

  constructor() { }

  ngOnInit(): void {
    this.themeDark = localStorage.getItem('landing-theme')? true : false
  }

  public changeTheme = (data: boolean): any => {
    data? localStorage.setItem('landing-theme', 'dark') : localStorage.removeItem('landing-theme')
    this.themeDark = data
  }

}
