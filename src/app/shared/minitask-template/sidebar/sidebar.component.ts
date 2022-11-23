import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidebarI } from 'src/app/models/interfaces/minitask-template/sidebar.interface';
import { SidebarData } from 'src/app/models/data/minitask-template/sidebar-data.json';

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
