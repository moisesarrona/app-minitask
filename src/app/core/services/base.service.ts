import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorHttpI } from 'src/app/models/interfaces/errors/error-http.interface';
import { environment } from 'src/environments/environment';

const API_END_POINT = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private errorHttp: ErrorHttpI = {};

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Method get for any service, get url and params
   * @param url 
   * @param param 
   * @returns 
   */
  protected httpGetMethod = (url: string, param?: any): Observable<any> => {
    let params = '';
    if (param)
      Object.values(param).forEach(item => {
        params += '/' + item;
      });
    return this.httpClient.get(`${API_END_POINT}/${url}${params}`)
      .pipe(catchError(this.handlerError))
  }

  /**
   * Method post for any service, get url and data
   * @param url 
   * @param data 
   * @returns 
   */
  protected httpPostMethod = (url: string, data: any): Observable<any> => {
    return this.httpClient.post(`${API_END_POINT}/${url}`, data)
      .pipe(catchError(this.handlerError))
  }

  /**
   * Method put for any service, get url and data
   * @param url 
   * @param data 
   * @returns 
   */
  protected httpPutMethod = (url: string, data: any): Observable<any> => {
    return this.httpClient.put(`${API_END_POINT}/${url}`, data)
      .pipe(catchError(this.handlerError))
  }

  /**
   * Handler error for response in the services
   * @param error 
   * @returns 
   */
  private handlerError = (error: HttpErrorResponse): Observable<any> => {
    if (error.error instanceof ErrorEvent) {
      this.errorHttp = {
        message: error.error.message
      }
    } else {
      this.errorHttp = {
        httpStatus: error.status,
        message: error.message
      }
    }
    return throwError(() => this.errorHttp)
  }
}