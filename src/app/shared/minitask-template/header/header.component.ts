import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderData } from 'src/app/model/data/minitask-template/header-data.json';
import { HeaderI } from 'src/app/model/interface/minitask-template/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() menuEvent = new EventEmitter<any>();

  public headerData: HeaderI[] = [];
  public menuStatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.headerData = HeaderData.filter(item => item.active === true).reverse();
  }

  public openMenu = (event: any): void => {
    this.menuStatus = !this.menuStatus;
    this.menuEvent.emit(this.menuStatus);
  }

}
