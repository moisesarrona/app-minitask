import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-minitask-auth-template',
  templateUrl: './minitask-auth-template.component.html',
})
export class MinitaskAuthTemplateComponent implements OnInit, OnDestroy {

  public formUserRegister: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    birthday: ['', [Validators.required]],
    username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]]
  })
  public formUserLogin: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  public themeDark: boolean = false;
  public authShow: boolean = true;

  public $subject = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.themeDark = localStorage.getItem('landing-theme')? true : false
  }

  ngOnDestroy(): void {
    //this.$subject.next(true);
    this.$subject.complete();
    this.$subject.unsubscribe();
  }

  public showAuthEvent = ():void => {
    this.authShow = !this.authShow
  }

  public changeTheme = (data: boolean): any => {
    data? localStorage.setItem('landing-theme', 'dark') : localStorage.removeItem('landing-theme')
    this.themeDark = data
  }

  public createRegister = (): any => {
    this.formUserRegister.markAllAsTouched()
    console.log(this.formUserRegister.value)
    if (this.formUserRegister.valid) {
      this.userService.createdUser(this.formUserRegister.value).pipe(takeUntil(this.$subject)).subscribe(
        (success: any) => {
          console.log(success)
        }, (error: any) => {
          console.log(error)
        }
      ).add(() => {
        console.log("End service")
      })
    } else {
      console.log("Error")
    }
  }

  public findUserLogin = (): any => {
    this.formUserLogin.markAllAsTouched()
    if (this.formUserLogin.valid) {
      this.userService.findUserByEmailAndPassword(this.formUserLogin.value).pipe(takeUntil(this.$subject)).subscribe(
        (success: any) => {
          console.log(success)
        }, (error: any) => {
          console.log(error)
        }
      ).add(() => {
        console.log("End service")
      })
    } else {
      console.log("Error")
    }
  }
    
}
