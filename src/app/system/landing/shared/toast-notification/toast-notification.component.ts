import { Component, Input, OnInit } from '@angular/core';
import { ToastI } from '../../models/toast.interface';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
})
export class ToastNotificationComponent implements OnInit {
  @Input() data: ToastI = {}

  public isVisible = false;

  constructor() { }

  ngOnInit(): void {
    this.showToast();
  }

  public showToast = (): void => {
    setTimeout(() => {
      this.isVisible = true;
      setTimeout(() => {
        this.isVisible = false;
      }, 5500);
    }, 800);
  }

}
