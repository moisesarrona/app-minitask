import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
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

  public formUserRegister: UntypedFormGroup = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    birthday: ['', [Validators.required]],
    username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]]
  })
  public formUserLogin: UntypedFormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  public themeDark: boolean = false;
  
  public formShow: boolean = true;
  public formLoad: boolean = false;

  public user: any = {};
  public userIf: boolean = false;

  public errorHttp: ErrorHttpI = {};
  public errorIs: boolean = false;
  public errorType: ErrorTypeI = {}

  public _subject = new Subject();

  constructor(
    private _formBuilder: UntypedFormBuilder,
    private _userService: UserService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.themeDark = localStorage.getItem('landing-theme')? true : false;

    /* This code is not oficial to auth in this app */
    this.userIf = localStorage.getItem('user-session')? true : false;
    if (this.userIf)
      this._route.navigate(["app/user"])
  }

  ngOnDestroy(): void {
    this._subject.complete();
    this._subject.unsubscribe();
  }

  /** 
   * show form login or register
   * @return void
   */
  public showAuthEvent = ():void => {
    this.formShow = !this.formShow
  }

  /**
   * Change theme dark or light
   * @param data 
   * @returns
   */
  public changeTheme = (data: boolean): any => {
    data? localStorage.setItem('landing-theme', 'dark') : localStorage.removeItem('landing-theme')
    this.themeDark = data
  }

  /**
   * Create user and give access
   */
  public createRegister = (): void => {
    this.formLoad = true;
    this.formUserRegister.markAllAsTouched()
    if (this.formUserRegister.valid)
      this._userService.createdUser(this.formUserRegister.value).pipe(takeUntil(this._subject)).subscribe(
        (success: any) => {
          this.user = success;
          this._route.navigate(["app/user"])
        }, (error: any) => {
          this.handlerErrorHttp(error, ErrorTypes.DANGER);
        }
      ).add(() => {
        this.formLoad = false;
      })
  }

  /**
   * Find user for give access
   */
  public findUserLogin = (): void => {
    this.formLoad = true;
    this.formUserLogin.markAllAsTouched()
    if (this.formUserLogin.valid)
      this._userService.findUserByEmailAndPassword(this.formUserLogin.value).pipe(takeUntil(this._subject)).subscribe(
        (success: any) => {
          this.user = success;
          this.addUserLocalStorage(this.user)
          this._route.navigate(["app/user"])
        }, (error: any) => {
          this.handlerErrorHttp(error, ErrorTypes.DANGER);
        }
      ).add(() => {
        this.formLoad = false;
      })
  }

  /**
   * handler error for service response 
   * @param error 
   * @param errorType 
   */
  public handlerErrorHttp = (error: ErrorHttpI, errorType: string): void =>  {
    this.errorIs = true;
    this.errorHttp = error;
    this.errorType.type = errorType;
    setTimeout(() => {
      this.errorIs = false
    }, 3500);
  }

  /**
   * Validate form control and return validation status
   * @param formControl 
   * @returns
   */
  public validateFormControl = (formControl: any): boolean => {
    return (formControl.invalid && (formControl.dirty || formControl.touched))? true : false;
  }

  /**
   * Get errors from form group
   * @param formControl 
   * @returns
   */
  public getErrorFormControl = (formControl: any): any => {
    return Object.keys(formControl.errors)
  }


  /* This code block is'nt oficial */


  /**
   * Add user localstorage when this logge
   * @param user 
   */
  public addUserLocalStorage = (user: UserI): void => {
    localStorage.setItem('user-session', JSON.stringify(user));
  }

  /**
   * Delete user from localstorage
   */
  public deleteUserLocalStorage = (): void => {
    localStorage.removeItem('user-session');
  }

}
