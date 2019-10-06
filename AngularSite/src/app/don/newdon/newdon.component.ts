import { Component, OnInit } from '@angular/core';

import { Article } from 'src/app/shared/article.model';
import { ArticleService } from 'src/app/shared/article.service';
import { DonService } from 'src/app/shared/don.service';
import { DonArticle } from 'src/app/shared/don-article.model';
import { Don } from 'src/app/shared/don.model';
import { UtilisateurService } from 'src/app/shared/utilisateur.service';

@Component({
  selector: 'app-newdon',
  templateUrl: './newdon.component.html',
  styles: []
})
export class NewdonComponent implements OnInit {

  // retrouver don a modifier
  modifDon: number;

  // validation
  articleValid: boolean;
  prixValid: boolean;
  qteValid: boolean;
  descValid: boolean;
  donSucces: boolean;

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
    this.a_service.getListeArticles().then(res => this.articleList = res as Article[]);
    this.resetForm();
    this.donArticleList = [];
    this.reset = false;
    this.modifDon = -1;

    if(JSON.parse(localStorage.getItem('modifDon'))){
      this.modifDon = JSON.parse(localStorage.getItem('modifDon'));

      // reset form here
      localStorage.setItem('modifDon', null);
      
      this.d_service.getDon(this.modifDon).subscribe(res =>{
        this.nouveauDon = <Don>res
        this.donArticleList = this.nouveauDon.DonArticles;

        this.donArticleList.forEach(donArt => {
          donArt.nom = this.getArtName(donArt.idArticle);
        });
          this.updateTotal();
      });
    }

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
      total: 0,
      nomDonateur: null,
      createdAt: null,
      totalQuantite: 0
    };
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
    if(id!=0){
      //console.log("get nom");
      var obj = this.articleList.filter(function(item:Article){
        return item.id==id;
      });
      //console.log(obj[0].nom);
      return obj[0].nom;
    }
  }

  onSubmit(){
    if(this.checkValid()){
      this.formData.nom = this.getArtName(this.formData.idArticle);
      this.donArticleList.push(this.formData);
      
      this.updateTotal();
      this.resetForm();
    } else {
      console.log("check failed");
    }
  }

  checkValid() {
    console.log("check valid");
    this.articleValid = false;
    this.descValid = false;
    this.prixValid = false;
    this.qteValid = false;

    if(this.formData.description.length >= 4){
      this.descValid = true;
    }

    if(this.formData.idArticle != 0){
      this.articleValid = true;
    } else {
      this.articleValid = false;
    }

    if(this.formData.valeur > 0){
      this.prixValid = true;
    }

    if(this.formData.quantite > 0){
      this.qteValid = true;
    }

    if(this.descValid && this.descValid && this.prixValid && this.qteValid)
      return true;

    return false;
  }

  // afficher le total des articles du don
  updateTotal(){
    this.nouveauDon.total = 0;
    this.donArticleList.forEach(art => {
      this.nouveauDon.total += art.quantite * art.valeur;
    })
  }

  // envoyer le don
  promesse(){
    if(this.donArticleList.length == 0){
      alert("Ajoutez des articles a votre don avant de l'envoyer");
    } else if(this.modifDon == -1){
      console.log(this.donArticleList);
      this.nouveauDon.DonArticles = this.donArticleList as DonArticle[];
      this.nouveauDon.idDonateur = this.donateurID;
      this.nouveauDon.datePromesse = new Date();
      this.nouveauDon.etat = 1;

      // trouver un responsable pour le don et l'assigner
      this.d_service.trouverResponsable().subscribe(res =>{
        this.nouveauDon.idResponsable = res as number

        console.log("responsable "+this.nouveauDon.idResponsable);
        // faire la promesse du don
        this.d_service.promettreDon(this.nouveauDon).subscribe(res => {
          this.donArticleList.forEach(a => {

            // enregistrer les articles
            this.d_service.ajouterArticle(a, (res as Don).id).subscribe(respo => {
              this.updateTotal();
            });
          })

          // vider le formulaire
          this.annulerDon();

          this.donSucces = true;
          setTimeout(() => {
            this.donSucces = false;
          }, 3000);
        });
      });

    } else {
      this.nouveauDon.DonArticles = this.donArticleList as DonArticle[];

      this.d_service.modifierDon(this.nouveauDon).subscribe(res => {
        this.donArticleList.forEach(a => {

          // enregistrer les articles
          this.d_service.modifierArticle(a).subscribe(respo => {
            this.updateTotal();
          });
        })

        // vider le formulaire
        this.annulerDon();

        this.donSucces = true;
        setTimeout(() => {
          this.donSucces = false;
        }, 3000);
      });
    }
  }

  annulerDon(){
    this.donArticleList = [];
    this.updateTotal();
  }

  modifArticle(art : DonArticle){
    this.formData = art;
    const index:number = this.donArticleList.indexOf(art);
    if(index !== -1)
      this.donArticleList.splice(index, 1);
    
  }

  
  // getArtName(id: number){
  //   if(id!=0){
  //     //console.log("get nom");
  //     var obj = this.articleList.filter(function(item:Article){
  //       return item.id==id;
  //     });
  //     //console.log(obj[0].nom);
  //     return obj[0].nom;
  //   }
  // }
}