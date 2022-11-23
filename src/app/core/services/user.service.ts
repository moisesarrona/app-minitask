import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserI } from 'src/app/models/interfaces/user/user.interface';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  private urlService: string = "users";

  constructor(
    httpClient: HttpClient 
  ) { 
    super(httpClient)
  }

  public createdUser = (user: UserI): Observable<UserI> => {
    return this.httpPostMethod(`${this.urlService}/createdUser`,user);
  }

  public findUserByEmailAndPassword = (user: any) => {
    return this.httpPostMethod(`${this.urlService}/findUserByEmailAndPassword`, user);
  }

}
