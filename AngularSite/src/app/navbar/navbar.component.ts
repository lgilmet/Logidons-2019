import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean; // 0=LoggedOut, 1=LoggedInDonateur, 2=LoggedInEmploye
  loggedInID: number;

  constructor() { }

  ngOnInit() {
    this.loggedInID = 0;
    this.loggedInID = JSON.parse(localStorage.getItem('userID'));

    this.isLoggedIn = false;
    this.isLoggedIn = JSON.parse(localStorage.getItem('loggedIn'));
  }

  logout() {
    localStorage.setItem('userID', '0');
    localStorage.setItem('loggedIn', 'false');
  }

  Loggedin(){
    return this.isLoggedIn;
  }
}
