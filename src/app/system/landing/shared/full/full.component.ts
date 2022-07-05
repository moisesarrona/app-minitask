import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
})
export class FullComponent implements OnInit {

  public themeDark: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.themeDark = localStorage.getItem('theme')? true : false
  }

  public changeTheme = (data: any): any => {
    data? localStorage.setItem('theme', 'dark') : localStorage.removeItem('theme')
    this.themeDark = data
  }

}
