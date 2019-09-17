import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  userID: number;

  constructor(private http: HttpClient) { }
  
  login(username:string, password:string)
  {
    var body = {
      Username : username,
      Password : password
    }

    console.log("login: " + username + " " + password)
    
    this.http.post(environment.apiURL + "/utilisateur/login", body).toPromise()
    .then( res => {
      this.userID = res as number;
      if(this.userID >= 1)
      {
        //Connected
        this.setLoggedIn(true);
      } else {
        //Not connected
        this.setLoggedIn(false);
      }
      console.log(this.userID);
    })

    
  }

  setLoggedIn(value: boolean)
  {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', value.toString());
  }

  isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString())
  }

  /*getListeArticles(){
    //http:
    return this.http.get(environment.apiURL + '/article').toPromise();
  }*/
}
