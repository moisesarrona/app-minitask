import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
})
export class FullComponent implements OnInit {

  public themeDark: boolean = false

  constructor() { }

  ngOnInit(): void {
    //this.themeDark = this.changeTheme(this.themeDark);
  }

  public changeTheme = (data: any): any => {
    localStorage.setItem('theme', data)
    this.themeDark = data;
  }

  public getTheme = (): any => {
    return localStorage.getItem('theme');
  }

}
