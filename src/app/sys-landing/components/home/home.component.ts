import { Component, OnInit } from '@angular/core';
import { HomeData } from '../../models/data/home-data.json';
import { ContentI } from '../../models/interface/content.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public contentData: ContentI[] = [];

  constructor() { }

  ngOnInit(): void {
    this.contentData = HomeData;
  }

}
