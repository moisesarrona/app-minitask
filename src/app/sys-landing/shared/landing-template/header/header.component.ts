import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderData } from 'src/app/sys-landing/models/data/header-data.json';
import { MenuI } from 'src/app/sys-landing/models/interface/menu.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() themeSelection = new EventEmitter<any>();

  public menuData: MenuI[] = [];
  public themeStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.themeStatus = localStorage.getItem('landing-theme')? true : false;
    this.menuData = HeaderData;
  }

  public changeTheme = ():void => {
    this.themeStatus = !this.themeStatus;
    this.themeSelection.emit(this.themeStatus);
  }

}
