import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Username } from '../shared/models';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = 'https://jef3cgaxik.execute-api.us-east-2.amazonaws.com/dev/username';

  getUsername(name: String) : Observable<any> {
    return this.http.get<any>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError (err: any) {
    console.error('API Failure: ', err);
    if (err.error instanceof Error) {
      const message = err.error.message;
      return Observable.throw(err.error.message);
    }
    return Observable.throw(err || 'api error ... ');
  }
}
