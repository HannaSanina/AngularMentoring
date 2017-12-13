import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth: boolean; //only for test purpose, going to be removed after auth and routing implementation
  title = 'app';

  constructor() {
    this.isAuth = false;//only for test purpose, going to be removed after auth and routing implementation
  }
}
