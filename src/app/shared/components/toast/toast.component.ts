import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
})
export class ToastComponent implements OnInit {
  @Input() type: string = '';
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() time: number = 0;

  public show: boolean = false;
  public showSubject: Subject<boolean> = new Subject<boolean>();

  ngOnInit = () => {
  }

  /**
   * Show toast
   */
  public showToast = (): void => {
    this.show = true;
    setTimeout(() => {
      this.closeToast()
    }, this.time);
  }

  /**
   * Close toast
   */
  public closeToast =  () => {
    this.show = false;
    this.showSubject.next(false);
  }

}
