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
      donArticles: don.donArticles
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
    //http:
    return this.http.get(environment.apiURL + '/dons').toPromise();
  }

}
