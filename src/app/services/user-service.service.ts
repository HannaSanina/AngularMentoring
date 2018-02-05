import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { ExtendedHttp } from './extended-http.service';
import { HttpHeaders } from '@angular/common/http';

import { AuthService } from './auth.service';
import { User } from './user';

@Injectable()
export class UserService {
  constructor(
    private http: ExtendedHttp,
    private authenticationService: AuthService) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get('/api/users');
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id, this.jwt());
  }

  create(user: User) {
    return this.http.post('/api/users', user, this.jwt());
  }

  update(user: User) {
    return this.http.put('/api/users/' + user.id, user, this.jwt());
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id, this.jwt());
  }

  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + currentUser.token
        })};
      return httpOptions;
    }
  }
}
