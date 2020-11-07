import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(private httpclient: HttpClient, ) {}

  getData(evnApiUrl): Observable<any> {
    console.log( evnApiUrl);
    return this.httpclient.get<any>(evnApiUrl);
   }
  
  
  putData(evnApiUrl,dataObject): Observable<any> {
    console.log('putData' + evnApiUrl);
    return this.httpclient.put<any>(evnApiUrl, dataObject);
   }
  
   postData(evnApiUrl,dataObject): Observable<any> {
     console.log('postData' + evnApiUrl);
     return this.httpclient.post<any>(evnApiUrl, dataObject);
  }
  
  deleteData(evnApiUrl): Observable<any> {
    console.log('deleteData' + evnApiUrl);
    return this.httpclient.delete<any>(evnApiUrl);
  }
  
}
