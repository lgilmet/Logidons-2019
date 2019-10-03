import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean; // 0=LoggedOut, 1=LoggedInDonateur, 2=LoggedInEmploye
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
