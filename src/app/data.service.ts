import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _dataUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: HttpClient) { }

  getData(): Observable<any[]> {
    return this._http.get<any[]>(this._dataUrl).pipe();
  }
}
