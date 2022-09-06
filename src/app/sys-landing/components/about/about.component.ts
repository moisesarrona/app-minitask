import { Component, OnInit } from '@angular/core';
import { AboutData } from '../../models/data/about-data.json';
import { ContentI } from '../../models/interface/content.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  public aboutData: ContentI[] = [];

  constructor() { }

  ngOnInit(): void {
    this.aboutData = AboutData;
  }

}
