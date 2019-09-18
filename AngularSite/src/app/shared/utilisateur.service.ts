import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  getEmployes(){
    return this.http.get(environment.apiURL + '/utilisateur/employes').toPromise();
  }

  getDonateurs(){
    return this.http.get(environment.apiURL + '/utilisateur/donateurs').toPromise();
  }

}
