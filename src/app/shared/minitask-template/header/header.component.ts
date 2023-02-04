import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeaderI } from 'src/app/models/interfaces/minitask-template/header.interface';
import { HeaderData } from 'src/app/models/data/minitask-template/header-data.json';

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

  /**
   * Send status to open menu
   * @param event 
   */
  public openMenu = (event: any): void => {
    this.menuStatus = !this.menuStatus;
    this.menuEvent.emit(this.menuStatus);
  }

}
