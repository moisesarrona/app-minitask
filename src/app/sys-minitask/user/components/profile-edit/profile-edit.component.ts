import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { BaseComponent } from 'src/app/shared/components/base/base.component';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
})
export class ProfileEditComponent extends BaseComponent implements OnInit {

  public formUserEdit: FormGroup = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    description: ['', [Validators.minLength(2), Validators.maxLength(255)]],
    link: ['', [Validators.minLength(2), Validators.maxLength(255)]],
    phone: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
  });

  @Input() inDataUser: any = {};
  @Input() inFormUserVisible: boolean = false;
  @Output() outFormUserVisible = new EventEmitter<boolean>();

  public formUserVisible: boolean = false
  public formLoad: boolean = false;

  public _subject = new Subject(); 

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _toastService: ToastService
  ){
    super();
  }

  ngOnInit(): void {
    this.modeEditUser();
  }

  /**
   * Change status formUserVisible to show form
   */
  public modeEditUser = (): void => {
    this.formUserVisible = !this.formUserVisible;
    this.outFormUserVisible.emit(this.formUserVisible);
    if (this.formUserVisible) {
      this.formUserEdit.controls['name'].setValue(this.inDataUser.name)
      this.formUserEdit.controls['lastname'].setValue(this.inDataUser.lastname)
      this.formUserEdit.controls['description'].setValue(this.inDataUser.description)
      this.formUserEdit.controls['link'].setValue(this.inDataUser.link)
      this.formUserEdit.controls['phone'].setValue(this.inDataUser.phone)
    }
  }

  /**
   * Update user information
   */
  public updateUserData = (): void => {
    this.formLoad = true
    this.formUserEdit.markAllAsTouched()
    var user = Object.assign(this.inDataUser, this.formUserEdit.value)
    if (this.formUserEdit.valid)
      this._userService.updateUser(user).pipe(takeUntil(this._subject)).subscribe(
        (success: any) => {
          this.inDataUser = success
          localStorage.setItem('user-session', JSON.stringify(this.inDataUser));
          this._toastService.showToast('success', 'Success', 'Your data is update', 3000)
        },
        (error: any) => {
          console.log(error)
          this._toastService.showToast('danger', 'Error', 'Your data is not update', 3000)
        }
      ).add(() => {
        this.formLoad = false
        this.formUserVisible = false
        this.outFormUserVisible.emit(this.formUserVisible);
      })
  }

}
