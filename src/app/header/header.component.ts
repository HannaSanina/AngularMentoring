import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Resolve, Router, NavigationEnd, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  userName: string;
  courseName: string;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.userName = this.authService.getUserInfo();
    this.authService.isLoggedIn()
      .subscribe(res => {
        this.isLoggedIn = res;
      });

    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      this.courseName =  this.activatedRoute.snapshot.queryParams['title'];
    });
  }
}
