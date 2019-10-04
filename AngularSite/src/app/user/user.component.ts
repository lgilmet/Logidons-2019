import { Component, OnInit } from '@angular/core';
import { Don } from '../shared/don.model';
import { DonService } from '../shared/don.service';
import { DonArticle } from '../shared/don-article.model';
import { Article } from '../shared/article.model';
import { ArticleService } from '../shared/article.service';
import { Utilisateur } from '../shared/utilisateur.model';
import { AuthService } from '../shared/auth.service';
import { UtilisateurService } from '../shared/utilisateur.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  dons: Don[];
  articleList: Article[];

  user : Utilisateur;



  constructor(
    private d_service: DonService,
    private a_service: ArticleService,
    private auth : AuthService,
    private u_service : UtilisateurService
  ) { }

   
  ngOnInit() {
    this.u_service.getUtilisateur(this.auth.getUserId()).then(res => {
      this.user = res as Utilisateur;
      if(!this.user.telephoneMaison)
        this.user.telephoneMaison = "...";
      if(!this.user.telephonetravail)
        this.user.telephonetravail = "...";
      if(!this.user.telephoneMobile)
        this.user.telephoneMobile = "...";
        
    });

    
    /*this.a_service.getListeArticles().then(res=> this.articleList = res as Article[]);

    var idUser: number;
    idUser = +localStorage.getItem("userID");
    this.d_service.getDonsDonateur(idUser).then(res =>  {
    this.dons = res as Don[];
    console.log("this.dons");
    console.log(this.dons);
    this.dons.forEach(don => {
      don.total = 0;

      
      var donsArticles : DonArticle[];
      console.log("don.DonArticles");
      console.log(don.DonArticles);
      don.DonArticles.forEach(donArt => {
        donArt.nom = this.getArtName(donArt.idArticle);
        don.total += donArt.valeur * donArt.quantite;

      });
    });
  });*/

  }

  getType()
  {
    if(this.user.type == "0")
      return "Admin";
    else if(this.user.type == "1")
      return "Employé";
    else if(this.user.type == "2")
      return "Donateur";
    else if(this.user.type == "3")
      return "Bénévole";
    else if(this.user.type == "4")
      return "Superviseur";
    else
      return "Invalide";
  }
// trouver le nom d item
  getArtName(id: number){
    var obj = this.articleList.filter(function(item:Article){
      return item.id==id;
    });
    return obj[0].nom;}

}

  
  
