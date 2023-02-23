import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent extends BaseComponent implements OnInit {

  public userData: any = {};
  public userFormVisible: boolean = false;

  public formUserVisible: boolean = false;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem("user-session") || '{}');
  }

  public modeEditUser = (): void => {
    this.formUserVisible = true;
  }

  public getformUserVisible(event: boolean) {
    this.formUserVisible = event;
  }

}