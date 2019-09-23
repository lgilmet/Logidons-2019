import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Utilisateur } from './utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  getEmployes() {
    return this.http.get(environment.apiURL + '/utilisateur/employes').toPromise();
  }

  getDonateurs() {
    return this.http.get(environment.apiURL + '/utilisateur/donateurs').toPromise();
  }

  addUtilisateur(user: Utilisateur) {
    var body = {
      type: 'donateur',
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      username: user.prenom,
      password: user.password


    }
    return this.http.post(environment.apiURL + '/utilisateur', body);
  }

}
