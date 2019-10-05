import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInID: number;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.loggedInID = this.auth.getUserId();

    this.isLoggedIn = this.auth.isLoggedIn();
  }

  logout() {
    this.auth.logOut();
  }

  Loggedin(){
    return this.isLoggedIn;
  }
}
