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

  /**
   * Service to create user
   * @param user 
   * @returns 
   */
  public createdUser = (user: UserI): Observable<UserI> => {
    return this.httpPostMethod(`${this.urlService}/createdUser`,user);
  }

  /**
   * Service to find user by email and password (login)
   * @param user 
   * @returns 
   */
  public findUserByEmailAndPassword = (user: any) => {
    return this.httpPostMethod(`${this.urlService}/findUserByEmailAndPassword`, user);
  }

  /**
   * Service to update user
   * @param user 
   * @returns 
   */
  public updateUser = (user: UserI): Observable<UserI> => {
    return this.httpPutMethod(`${this.urlService}/updatedUser`, user);
  }

}
