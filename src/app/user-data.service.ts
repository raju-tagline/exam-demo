import { UserData } from './interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService implements OnInit {
  private url: string = environment.url;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  public signUp(data: UserData): Observable<any> {
    return this.http.post(this.url + 'users/SignUp', data);
  }

  public login(login: UserData): Observable<any> {
    return this.http.post(this.url + 'users/Login', login);
  }
}
