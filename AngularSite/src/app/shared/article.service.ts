import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  formArticle: Article;

  constructor(private http: HttpClient) { }
  
  getListeArticles(){
    //http:
    return this.http.get(environment.apiURL + '/article').toPromise();
  }

  addArticle(){
    var body = {
      nom: this.formArticle.nom
    }

    return this.http.post(environment.apiURL + '/article', body);

    
  }
}
