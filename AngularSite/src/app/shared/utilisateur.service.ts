import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Utilisateur } from './utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  constructor(private http: HttpClient) { }

  getUtilisateur(id:number)
  {
    return this.http.get(environment.apiURL + "/utilisateurs/" + id).toPromise();
  }

  checkEmail(_email:string){
    return this.http.get(environment.apiURL+"/utilisateurs/email/"+ _email).toPromise();
  }

  checkUsername(_username: string){
    return this.http.get(environment.apiURL + "/utilisateurs/username/"+ _username).toPromise();
  }

  getEmployes() {
    return this.http.get(environment.apiURL + '/utilisateurs/employes').toPromise();
  }

  getDonateurs() {
    return this.http.get(environment.apiURL + '/utilisateurs/donateurs').toPromise();
  }

  addUtilisateur(user: Utilisateur) {
    return this.http.post(environment.apiURL + '/utilisateurs', user);
  }

}
