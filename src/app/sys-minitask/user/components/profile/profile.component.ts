import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  public formUserEdit: FormGroup = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    description: ['', [Validators.minLength(2), Validators.maxLength(255)]],
    link: ['', [Validators.minLength(2), Validators.maxLength(255)]],
    phone: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
  })

  public formUserVisible: boolean = false

  public formLoad: boolean = false;

  public userData: any = {}
  public userFormVisible: boolean = false

  public _subject = new Subject(); 

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService
  ) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem("user-session") || '{}');
  }

  /**
   * Change status formUserVisible to show form
   */
  public modeEditUser = (): void => {
    this.formUserVisible = !this.formUserVisible;
    if (this.formUserVisible) {
      this.formUserEdit.controls['name'].setValue(this.userData.name)
      this.formUserEdit.controls['lastname'].setValue(this.userData.lastname)
      this.formUserEdit.controls['description'].setValue(this.userData.description)
      this.formUserEdit.controls['link'].setValue(this.userData.link)
      this.formUserEdit.controls['phone'].setValue(this.userData.phone)
    }
  }

  /**
   * Update user information
   */
  public updateUserData = (): void => {
    this.formLoad = true
    this.formUserEdit.markAllAsTouched()
    var user = Object.assign(this.userData, this.formUserEdit.value)
    if (this.formUserEdit.valid)
      this._userService.updateUser(user).pipe(takeUntil(this._subject)).subscribe(
        (success: any) => {
          this.userData = success
          localStorage.setItem('user-session', JSON.stringify(this.userData));
        },
        (error: any) => {
          console.log(error)
        }
      ).add(() => {
        this.formLoad = false
        this.formUserVisible = false
      })
  }

  }

}
