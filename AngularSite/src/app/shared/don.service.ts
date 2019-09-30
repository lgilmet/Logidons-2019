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

  getListeDons(){
    return this.http.get(environment.apiURL + '/dons').toPromise();
  }

  getDonsDonateur(id:number){
    return this.http.get(environment.apiURL + '/dons/donateur/'+id).toPromise();
  }


}
