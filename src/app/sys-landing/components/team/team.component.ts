import { Component, OnInit } from '@angular/core';
import { TeamData } from '../../models/data/team-data.json';
import { ContentI } from '../../models/interface/content.interface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
})
export class TeamComponent implements OnInit {

  public teamData: ContentI[] = []

  constructor() { }

  ngOnInit(): void {
    this.teamData = TeamData;
  }

}
