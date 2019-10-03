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
    var body = {
      idDonateur: don.idDonateur,
      donArticles: don.DonArticles
    }

    return this.http.post(environment.apiURL+'/dons', body);
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

  setEtat(id : Number, statut : Number)
  {
    var body = {
      etat : statut
    }
    return this.http.post(environment.apiURL+"/dons/"+id, body);
  }

  getListeDons(){
    return this.http.get(environment.apiURL + '/dons').toPromise();
  }

  getListeDonsParEmploye(id:number)
  {
    return this.http.get(environment.apiURL + '/dons/employe/' + id).toPromise();
  }

  getDonsDonateur(id:number){
    return this.http.get(environment.apiURL + '/dons/donateur/'+id).toPromise();
  }


}
