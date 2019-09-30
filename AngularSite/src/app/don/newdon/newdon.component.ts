import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';

import { Article } from 'src/app/shared/article.model';
import { ArticleService } from 'src/app/shared/article.service';
import { DonService } from 'src/app/shared/don.service';
import { DonArticle } from 'src/app/shared/don-article.model';
import { UtilisateurService } from 'src/app/shared/utilisateur.service';
import { Utilisateur } from 'src/app/shared/utilisateur.model';
import { Don } from 'src/app/shared/don.model';

@Component({
  selector: 'app-newdon',
  templateUrl: './newdon.component.html',
  styles: []
})
export class NewdonComponent implements OnInit {
  // validation
  articleValid: boolean;
  prixValid: boolean;
  qteValid: boolean;
  descValid: boolean;

  formData: DonArticle;
  reset: boolean;

  articleList: Article[];
  donArticleList: DonArticle[]; 
  art: DonArticle;

  donateurID: number;

  nouveauDon: Don;

  isValid: boolean;

  constructor(
    private a_service: ArticleService,
    private d_service: DonService,
    private u_service: UtilisateurService
  ) { }

  ngOnInit() {
    this.resetForm();
    this.donArticleList = [];
    this.reset = false;

    this.donateurID = JSON.parse(localStorage.getItem('userID'));
    this.nouveauDon = {
      id: null,
      datePromesse: null,
      dateReception: null,
      dateAccepter: null,
      etat: null,
      idDonateur: 0,
      idResponsable: 0,
      DonArticles: [],
      total: 0
 
    };
    this.a_service.getListeArticles().then(res => this.articleList = res as Article[]);
  }

  resetForm(){
    this.formData = {
      id: 0,
      idArticle: 0,
      idDon: 0,
      nom: '',
      valeur: 0,
      quantite: 0,
      description: ''
    }

    this.reset = true;
  }

  getArtName(id: number){
    var obj = this.articleList.filter(function(item:Article){
      return item.id==id;
    });
    console.log(obj[0].nom);
    return obj[0].nom;
  }

  onSubmit(){
    if(this.checkValid()){
      this.donArticleList.push(this.formData);
      this.resetForm();
    } else {
    }
  }

  checkValid() {
    this.articleValid = false;
    this.descValid = false;
    this.prixValid = false;
    this.qteValid = false;

    if(this.formData.description.length >= 4)
      this.descValid = true;

    if(this.formData.id != 0)
      this.articleValid = true;

    if(this.formData.valeur > 0)
      this.prixValid = true;

    if(this.formData.quantite > 0)
      this.qteValid = true;

    return this.articleValid && this.descValid && this.prixValid && this.qteValid
  }



  promesse(){
    if(this.donArticleList.length == 0){
      alert("Ajoutez des articles a votre don avant de l'envoyer");
    } else {
      console.log(this.donArticleList);
      this.nouveauDon.DonArticles = this.donArticleList as DonArticle[];
      this.nouveauDon.idDonateur = this.donateurID;
      this.d_service.promettreDon(this.nouveauDon).subscribe(res => {
        console.log(res);
        var newId = (res as Don).id;
        this.donArticleList.forEach(a => {
          this.d_service.ajouterArticle(a, newId).subscribe(respo => {
            console.log("Added object " + respo + " to Don #" + newId);
          });
        })
      });
    }
  }

  annulerDon(){
    
  }
}