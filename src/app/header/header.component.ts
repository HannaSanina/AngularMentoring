import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  userName: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.userName = this.authService.getUserInfo();
    this.authService.isLoggedIn()
      .subscribe(res => {
        console.dir("Islogged: "+ res);
        this.isLoggedIn = res;
      });
  }
}
