import { Component, Input, OnInit } from '@angular/core';
import { ToastI } from '../../models/interface/toast.interface';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
})
export class ToastNotificationComponent implements OnInit {
  @Input() data: ToastI = {}

  public toastVisible = false;

  constructor() { }

  ngOnInit(): void {
    this.showToast();
  }

  /**
   * Show toast when start landing page
   */
  public showToast = (): void => {
    setTimeout(() => {
      this.toastVisible = true;
      setTimeout(() => {
        this.toastVisible = false;
      }, 5500);
    }, 800);
  }

}
