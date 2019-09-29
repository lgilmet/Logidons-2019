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

  articleList: Article[];
  donArticleList: DonArticle[]; 
  newArticleID: number;
  newArticleValeur: number;
  newArticleQte: number;
  newArticleDesc: string;
  total: number;
  art: DonArticle;

  donateurID: number;

  nouveauDon: Don;

  listeDonateurs: Utilisateur[];
  listeEmployes: Utilisateur[];

  isValid: boolean;

  constructor(
    private a_service: ArticleService,
    private d_service: DonService,
    private u_service: UtilisateurService
  ) { }

  ngOnInit() {
    this.resetForm();
    this.donArticleList = [];
    this.listeDonateurs = [];

    this.donateurID = JSON.parse(localStorage.getItem('userID'));
    this.nouveauDon = {
      id: null,
      datePromesse: null,
      dateReception: null,
      dateAccepter: null,
      etat: null,
      idDonateur: 0,
      idResponsable: 0,
      donArticles: []
 
    };
    this.a_service.getListeArticles().then(res => this.articleList = res as Article[]);
    this.u_service.getDonateurs().then(res => this.listeDonateurs = res as Utilisateur[]);
  }

  resetForm(){
    this.newArticleID = 0;
    this.newArticleValeur = 0;
    this.newArticleQte = 0;
    this.newArticleDesc = '';
    this.total = 0;
  }

  getArtName(id: number){
    var obj = this.articleList.filter(function(item:Article){
      return item.id==id;
    });
    console.log(obj[0].nom);
    return obj[0].nom;
  }

  onSubmit(){
    if(this.validate() == true){
      this.art = { 
        idArticle : this.newArticleID,
        valeur: this.newArticleValeur,
        quantite: this.newArticleQte,
        nom: this.getArtName(this.newArticleID),
        description: this.newArticleDesc
      } as DonArticle;
      this.donArticleList.push(this.art);
      this.resetForm();
    } else {
    }
  }

  checkValid() {
    this.articleValid = false;
    this.descValid = false;
    this.prixValid = false;
    this.qteValid = false;

    if(this.newArticleDesc.length >= 4)
      this.descValid = true;

    
  //   this.nomValid = false;
  //   this.prenomValid = false;
  //   this.emailValid = false;
  //   this.passwordValid = false;
  //   this.confirmePasswordValid = false;

  // if (this.formData.nom.length >= 4)
  //   this.nomValid = true;

  // if (this.formData.prenom.length >= 4)
  //   this.prenomValid = true;

  // if (this.formData.email.length >= 4)
  //   this.emailValid = true;

  // if (this.formData.password.length >= 4)
  //   this.passwordValid = true;

  // if (this.confirmPasswordText.length >= 4 && this.confirmPasswordText==this.formData.password)
  //   this.confirmePasswordValid = true;
  }

  validate(){
    this.isValid = true;
    if(this.newArticleID == 0 || 
      this.newArticleValeur < 1 ||
      this.newArticleQte < 1 ||
      this.newArticleDesc.length < 1)
      {
        this.isValid = false;
        alert()
      }
    return this.isValid;
  }

  updateTotal(prix: number, qte: number){
    this.total = prix * qte;
  }

  promesse(){
    if(this.donArticleList.length == 0){
      alert("Ajoutez des articles a votre don avant de l'envoyer");
    } else {
      console.log(this.donArticleList);
      this.nouveauDon.donArticles = this.donArticleList as DonArticle[];
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