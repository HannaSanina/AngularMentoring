import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User } from './user';
import { stringify } from '@angular/compiler/src/util';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class AuthService {
  token: string;
  public isLogin = new ReplaySubject<boolean>(1);

  constructor(private http: HttpClient) {
  //  let currentUser = JSON.parse(localStorage.getItem('currentUser'));
//    this.token = currentUser && currentUser.token;
  }

  login(username: string, password: string): void {
    localStorage.setItem('currentUser', JSON.stringify({ user: "username", pass: "password" }));
    this.isLogin.next(true);
  //  this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
/*    .map((response: Response) => {
        const token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          this.isLogin.next(true);
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
        } else {
          this.isLogin.next(false);
        }
      }, error => {
        console.dir(error);
      }); */
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
    return user.username || "noname";
  }
}