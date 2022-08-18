import { Component, OnInit } from '@angular/core';
import { SidebarData } from 'src/app/model/data/minitask-template/sidebar-data.json';
import { SidebarI } from 'src/app/model/interface/minitask-template/sidebar.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  public sidebarData: SidebarI[] = [];

  constructor() { }

  ngOnInit(): void {
    this.sidebarData = SidebarData
  }

}
