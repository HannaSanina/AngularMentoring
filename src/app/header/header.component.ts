import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnChanges {
  isLoggedIn: Observable<boolean>;

  constructor(public authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn();
   }

  ngOnInit() {
  }

  ngOnChanges() {
    console.dir("on change");
  }
}
