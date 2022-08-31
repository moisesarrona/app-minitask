import { Component, OnInit } from '@angular/core';
import { FooterData, FooterWords } from 'src/app/sys-landing/models/data/footer-data.json';
import { MenuI } from 'src/app/sys-landing/models/interface/menu.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  public footerData: MenuI[] = [];
  public footerWords: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.footerData = FooterData;
    this.footerWords = FooterWords;
  }

}
