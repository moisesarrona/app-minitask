import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minitask-auth-template',
  templateUrl: './minitask-auth-template.component.html',
})
export class MinitaskAuthTemplateComponent implements OnInit {

  public showAuth: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  public showAuthEvent = ():void => {
    this.showAuth = !this.showAuth
  }

}
