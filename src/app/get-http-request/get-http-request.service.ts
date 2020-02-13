import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetHttpRequestService {

  private URL = "https://jsonplaceholder.typicode.com/posts";

  constructor(
    private http : HttpClient
  ) { }

  sendGetRequest(){
    return this.http.get(this.URL);
  }

  handleError(error:HttpErrorResponse) {
    let errorMsg = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // client error
      errorMsg = `Error: ${error.error.message}`;
    } else {
      // server side error
      errorMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMsg);
    return throwError(errorMsg);
  }

  
}
