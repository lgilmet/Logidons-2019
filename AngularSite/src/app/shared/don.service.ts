import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Don } from './don.model';
import { DonArticle } from './don-article.model';

@Injectable({
  providedIn: 'root'
})
export class DonService {

  constructor(private http: HttpClient) { }

  promettreDon(don: Don){
    return this.http.post(environment.apiURL+'/dons', don)
  }

  trouverResponsable(){
    return this.http.get(environment.apiURL + "/utilisateurs/findresponsable");
  }

  ajouterArticle(article: DonArticle, id : number)
  {
    var body = {
      idArticle: article.idArticle,
      idDon: id,
      description: article.description,
      quantite: article.quantite,
      valeur: article.valeur
    }
    return this.http.post(environment.apiURL+'/donArticles', body);
  }

  modifierArticle(article: DonArticle)
  {
    return this.http.post(environment.apiURL+'/donArticles/'+article.id, article);
  }

  modifierDon(don: Don)
  {
    return this.http.post(environment.apiURL+'/dons/'+don.id, don);
  }

  setEtat(id : Number, statut : Number)
  {
    var reception: Date;

    if(statut == 2 || 0){
      reception = new Date();
    }

    var body = {
      etat : statut,
      dateReception : reception
    }
    return this.http.post(environment.apiURL+"/dons/"+id, body);
  }

  getListeDons(){
    return this.http.get(environment.apiURL + '/dons').toPromise();
  }

  getDon(id: number){
    return this.http.get(environment.apiURL + '/dons/' + id);
  }

  getListeDonsParEmploye(id:number)
  {
    return this.http.get(environment.apiURL + '/dons/employe/' + id).toPromise();
  }

  getDonsDonateur(id:number){
    return this.http.get(environment.apiURL + '/dons/donateur/'+id).toPromise();
  }


}
