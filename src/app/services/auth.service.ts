import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User } from './user';
import { stringify } from '@angular/compiler/src/util';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ExtendedHttp } from './extended-http.service';

@Injectable()
export class AuthService {
  token: string;
  public isLogin = new ReplaySubject<boolean>(1);

  constructor(private http: ExtendedHttp) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
   return this.http.get(`/api/users?username=${username}`)
      .map((response: Response) => {
        const token = response.json() && response.json()[0].token;
        if (token) {
          this.token = token;
          this.isLogin.next(true);
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          return true;
        } else {
          this.isLogin.next(false);
          return false;
        }
      }, error => {
        console.dir(error);
      });
  }

  logout(): void {
    this.token = null;
    this.isLogin.next(false);
    localStorage.removeItem('currentUser');
  }

  hasToken(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLogin.asObservable();
  }

  getUserInfo(): string {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    return user && user.username || "noname";
  }
}
