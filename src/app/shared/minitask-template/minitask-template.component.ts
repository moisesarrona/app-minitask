import { Component, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-minitask-template',
  templateUrl: './minitask-template.component.html',
  styleUrls: ['./minitask-template.component.css']
})
export class MinitaskTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    }) 
  }

}
