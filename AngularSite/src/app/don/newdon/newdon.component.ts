import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Article } from 'src/app/shared/article.model';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-newdon',
  templateUrl: './newdon.component.html',
  styles: []
})
export class NewdonComponent implements OnInit {
  articleList: Article[];

  constructor(
    private a_service: ArticleService
  ) { }

  ngOnInit() {

    this.a_service.getListeArticles().then(res => this.articleList = res as Article[]);
  }

}
