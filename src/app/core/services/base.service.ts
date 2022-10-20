import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_END_POINT = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    private httpClient: HttpClient
  ) { }

  protected httpGetMethod = (url: string, param: any): Observable<any> => {
    return this.httpClient.get(`${API_END_POINT}/${url}/${param}`)
      .pipe(catchError(this.handleError))
  }

  protected httpPostMethod = (url: string, data: any): Observable<any> => {
    return this.httpClient.post(`${API_END_POINT}/${url}`, data)
      .pipe(catchError(this.handleError))
  }

  protected httpPutMethod = (url: string, data: any) => {
    return this.httpClient.put(`${API_END_POINT}/${url}`, data)
      .pipe(catchError(this.handleError))
  }

  private handleError = (error: HttpErrorResponse): any => {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`
    } else {
      errorMessage = `Status: ${error.status} \nError: ${error.message} \nUrl: ${error.url}`
    }
    return throwError(() => errorMessage)
  }
}
