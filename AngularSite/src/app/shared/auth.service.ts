import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Utilisateur } from './utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  userID: number;

  constructor(
    private http: HttpClient) { }
  
  login(username:string, password:string)
  {
    var body = {
      username : username,
      password : password
    }

    console.log("login: " + username + " " + password)
    
    this.http.post(environment.apiURL + "/utilisateurs/login", body).toPromise()
    .then( res => {
      var isUser = false;
      if(res == -1)
        isUser = false;
      else {
        var user = res as Utilisateur;
        var isUser = true;
      }
      
      if(isUser)
      {
        //Connected
        this.setLoggedIn(true);
        localStorage.setItem("userID", user.id.toString());
        localStorage.setItem("userType", user.type.toString());
        console.log(user.id.toString());
        window.location.href = "compte/profil";
      // 
      } else {
        //Not connected
        this.setLoggedIn(false);
      }
    })
  }

  setLoggedIn(value: boolean)
  {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', value.toString());
    if(!value)
    {
      localStorage.setItem("userID", "-1");
      localStorage.setItem("userType", "-1");
    }
  }

  logOut()
  {
    this.setLoggedIn(false);
  }

  getUserId() {
    return Number(localStorage.getItem('userID'));
  }

  isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString())
  }

  isDonateur() {
    if(this.isLoggedIn)
    {
      if(localStorage.getItem("userType") == "2")
        return true;
      else
        return false;
    }
  }

  isBenevole() {
    if(this.isLoggedIn)
    {
      if(localStorage.getItem("userType") == "3")
        return true;
      else
        return false;
    }
  }

  isEmploye() {
    if(this.isLoggedIn)
    {
      if(localStorage.getItem("userType") == "1")
        return true;
      else
        return false;
    }
  }

  isSuperviseur() {
    if(this.isLoggedIn)
    {
      if(localStorage.getItem("userType") == "4")
        return true;
      else
        return false;
    }
  }

  /*getListeArticles(){
    //http:
    return this.http.get(environment.apiURL + '/article').toPromise();
  }*/
}
