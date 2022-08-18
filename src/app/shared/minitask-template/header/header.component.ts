import { Component, OnInit } from '@angular/core';
import { HeaderData } from 'src/app/model/data/minitask-template/header-data.json';
import { HeaderI } from 'src/app/model/interface/minitask-template/header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  public headerData: HeaderI[] = [];

  constructor() { }

  ngOnInit(): void {
    this.headerData = HeaderData;
  }

}
