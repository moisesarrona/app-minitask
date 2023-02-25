import { Component, OnInit } from '@angular/core';
import { ToastI } from '../../models/interface/toast.interface';

@Component({
  selector: 'app-landing-template',
  templateUrl: './landing-template.component.html',
})
export class LandingTemplateComponent implements OnInit {

  public themeDark: boolean = false;

  public toastData: ToastI = {
    title: "Welcome!",
    description: "This landing page contains secrets, discover them, so be careful!",
    time: new Date()
  }

  constructor() { }

  ngOnInit(): void {
    this.themeDark = localStorage.getItem('landing-theme')? true : false
  }

  /**
   * Resive status to change theme
   * @param status 
   */
  public changeTheme = (data: boolean): any => {
    data? localStorage.setItem('landing-theme', 'dark') : localStorage.removeItem('landing-theme')
    this.themeDark = data
  }

}
