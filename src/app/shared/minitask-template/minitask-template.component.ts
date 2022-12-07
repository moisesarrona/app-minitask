import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-minitask-template',
  templateUrl: './minitask-template.component.html',
})
export class MinitaskTemplateComponent implements OnInit {

  public menuStatus: boolean = false;
  public themeStatus: boolean = false;

  public user: any = {};
  public userIf: boolean = false;

  constructor(
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.themeStatus = localStorage.getItem('landing-theme')? true : false
    /* This code is not oficial to auth in this app */
    this.userIf = localStorage.getItem('user-session')? !true : !false;
    if (this.userIf)
      this._route.navigate(["login"])
  }

  ngAfterViewInit(): void {
    this.initTooltip();
  }

  public initTooltip = (): void => {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    }) 
  }

  public changeTheme = (status: boolean) => {
    status? localStorage.setItem('landing-theme', 'dark') : localStorage.removeItem('landing-theme')
    this.themeStatus = status
  }

  public openMenu = (status: boolean) => {
    this.menuStatus = status;
  }

}
