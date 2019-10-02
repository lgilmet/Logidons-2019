import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Utilisateur } from './utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  newUser: string;

  constructor(private http: HttpClient) { }

  getUtilisateur(id:number)
  {
    return this.http.get(environment.apiURL + "/utilisateurs/" + id).toPromise();
  }

  checkEmail(_email:string){
    var body={
      email:_email
    }
    return this.http.get(environment.apiURL+"/utilisateurs/email/"+ _email).toPromise();
  }
  getEmployes() {
    return this.http.get(environment.apiURL + '/utilisateurs/employes').toPromise();
  }

  getDonateurs() {
    return this.http.get(environment.apiURL + '/utilisateurs/donateurs').toPromise();
  }
  

  addUtilisateur(user: Utilisateur) {
    var body = {
      type: user.type,
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      username: user.prenom,
      password: user.password


    }
    return this.http.post(environment.apiURL + '/utilisateurs', body);
  }

  newDonateur(){
    this.newUser = "donateur";
  }

  newBenevole(){
    this.newUser = "benevole";
  }
}
