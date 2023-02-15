import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../models/data/user-info-data.json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  public userInfo: any = {}

  constructor() { }

  ngOnInit(): void {
    this.userInfo = UserInfo;
  }

}
