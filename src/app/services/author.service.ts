import { Injectable } from '@angular/core';
import { ExtendedHttp } from './extended-http.service';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthorService {

  constructor(
    private http: ExtendedHttp,
    private authenticationService: AuthService) {
  }

  getAuthors(): Observable<any> {
    return this.http.get('/api/authors');
  }

}
