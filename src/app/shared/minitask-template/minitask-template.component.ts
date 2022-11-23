import { Component, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-minitask-template',
  templateUrl: './minitask-template.component.html',
})
export class MinitaskTemplateComponent implements OnInit {

  public menuStatus: boolean = false;
  public themeStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.themeStatus = localStorage.getItem('landing-theme')? true : false
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
