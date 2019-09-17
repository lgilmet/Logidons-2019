import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Article } from 'src/app/shared/article.model';
import { ArticleService } from 'src/app/shared/article.service';
import { DonService } from 'src/app/shared/don.service';
import { DonArticle } from 'src/app/shared/don-article.model';

@Component({
  selector: 'app-newdon',
  templateUrl: './newdon.component.html',
  styles: []
})
export class NewdonComponent implements OnInit {
  articleList: Article[];
  donArticleList: DonArticle[]; 
  newArticleID: number;
  newArticleValeur: number;
  art: DonArticle;

  constructor(
    private a_service: ArticleService,
    private d_service: DonService
  ) { }

  ngOnInit() {

    this.donArticleList = [];

    this.a_service.getListeArticles().then(res => this.articleList = res as Article[]);
  }

  resetForm(){

  }



  onSubmit(){
    this.art = { 
      IDarticle : this.newArticleID,
      valeur: this.newArticleValeur
    } as DonArticle;

    this.donArticleList.push(this.art);

    // this.d_service.addDon().subscribe(res => {
    //   console.log(res)
    // })
  }

}
