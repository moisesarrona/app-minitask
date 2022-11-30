import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { ErrorHttpI } from 'src/app/models/interfaces/errors/error-http.interface';
import { ErrorTypeI, ErrorTypes } from 'src/app/models/interfaces/errors/error-type.interface';
import { UserI } from 'src/app/models/interfaces/user/user.interface';

@Component({
  selector: 'app-minitask-auth-template',
  templateUrl: './minitask-auth-template.component.html',
})
export class MinitaskAuthTemplateComponent implements OnInit, OnDestroy {

  public formUserRegister: FormGroup = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    birthday: ['', [Validators.required]],
    username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]]
  })
  public formUserLogin: FormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  public themeDark: boolean = false;
  public authShow: boolean = true;
  public formLoad: boolean = false;

  public user: any = {};
  public userIf: boolean = false;

  public errorHttp: ErrorHttpI = {};
  public errorIs: boolean = false;
  public errorType: ErrorTypeI = {}

  public _subject = new Subject();

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.themeDark = localStorage.getItem('landing-theme')? true : false;
    this.userIf = localStorage.getItem('user-session')? true : false;
    if (this.userIf)
      this._route.navigate(["app"])
  }

  ngOnDestroy(): void {
    this._subject.complete();
    this._subject.unsubscribe();
  }

  public showAuthEvent = ():void => {
    this.authShow = !this.authShow
  }

  public changeTheme = (data: boolean): any => {
    data? localStorage.setItem('landing-theme', 'dark') : localStorage.removeItem('landing-theme')
    this.themeDark = data
  }

  public createRegister = (): any => {
    this.formLoad = true;
    this.formUserRegister.markAllAsTouched()
    if (this.formUserRegister.valid)
      this._userService.createdUser(this.formUserRegister.value).pipe(takeUntil(this._subject)).subscribe(
        (success: any) => {
          this.user = success
        }, (error: any) => {
          this.handlerErrorHttp(error, ErrorTypes.DANGER);
          this._route.navigate(["app"])
        }
      ).add(() => {
        this.formLoad = false;
      })
  }

  public findUserLogin = (): any => {
    this.formLoad = true;
    this.formUserLogin.markAllAsTouched()
    if (this.formUserLogin.valid)
      this._userService.findUserByEmailAndPassword(this.formUserLogin.value).pipe(takeUntil(this._subject)).subscribe(
        (success: any) => {
          this.user = success;
          this.addUserLocalStorage(this.user)
          this._route.navigate(["app"])
        }, (error: any) => {
          this.handlerErrorHttp(error, ErrorTypes.DANGER);
        }
      ).add(() => {
        this.formLoad = false;
      })
  }

  public handlerErrorHttp = (error: ErrorHttpI, errorType: string): void =>  {
    this.errorIs = true;
    this.errorHttp = error;
    this.errorType.type = errorType;
    setTimeout(() => {
      this.errorIs = false
    }, 3500);
  }

  public validateFormControl = (formControl: any): boolean => {
    return (formControl.invalid && (formControl.dirty || formControl.touched))? true : false;
  }

  public getErrorFormControl = (formControl: any): any => {
    return Object.keys(formControl.errors)
  }

  public addUserLocalStorage = (user: UserI): void => {
    localStorage.setItem('user-session', JSON.stringify(user));
  }

  public deleteUserLocalStorage = (): void => {
    localStorage.removeItem('user-session');
  }

}
