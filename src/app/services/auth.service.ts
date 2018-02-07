import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User } from './user';
import { stringify } from '@angular/compiler/src/util';
import { ExtendedHttp } from './extended-http.service';
import { Store, select } from '@ngrx/store';
import { LOGIN, LOGOUT } from './reducers/auth.reducer';

@Injectable()
export class AuthService {
  token: string;
  public isLogin: Observable<boolean>;

  constructor(private http: ExtendedHttp, private store: Store<boolean>) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.isLogin = store.pipe(select('auth'));
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get(`/api/users?username=${username}`)
      .map(response => {
        const token = response && response[0] && response[0].token;
        if (token) {
          this.store.dispatch({type: LOGIN});
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          return true;
        } else {
          this.store.dispatch({type: LOGOUT});
          return false;
        }
      }, error => {
        console.dir(error);
      });
  }

  logout(): void {
    this.store.dispatch({type: LOGOUT});
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  hasToken(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLogin;
  }

  getUserInfo(): string {
    let user = JSON.parse(localStorage.getItem('currentUser'));
    return user && user.username || "noname";
  }
}
