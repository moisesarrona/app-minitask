import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidebarData } from 'src/app/model/data/minitask-template/sidebar-data.json';
import { SidebarI } from 'src/app/model/interface/minitask-template/sidebar.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  @Input() menuStatus: boolean = false;
  @Output() themeEvent = new EventEmitter<any>(); 

  public sidebarData: SidebarI[] = [];
  public themeStatus: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.sidebarData = SidebarData.filter(item => item.active === true);
  }

  public changeTheme = (): void => {
    this.themeStatus = !this.themeStatus;
    this.themeEvent.emit(this.themeStatus);
  }

}
