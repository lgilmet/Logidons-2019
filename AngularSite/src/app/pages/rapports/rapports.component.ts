import { Component, OnInit } from '@angular/core';
import { DonService } from 'src/app/shared/don.service';
import { Don } from 'src/app/shared/don.model';
import { DonArticle } from 'src/app/shared/don-article.model';
import { add, subtract } from 'add-subtract-date';

@Component({
  selector: 'app-rapports',
  templateUrl: './rapports.component.html',
  styles: []
})
export class RapportsComponent implements OnInit {
  donResultat: Don[];
  donResultatTemp: Don[];
  now: Date;

  constructor(
    private d_service: DonService) { }

  ngOnInit() {
    this.donResultat = [];
    this.donResultatTemp = [];
    this.now = new Date();
  }

  rapportDonsDernierMois() {
    this.donResultat = [];
    this.donResultatTemp = [];
    this.d_service.getListeDons().then(res => {
      this.donResultatTemp = res as Don[];
      var unMoisAvant: Date;
      unMoisAvant = subtract(this.now, 30, "days");

      this.donResultatTemp.forEach(donTemp => {
        if (donTemp.datePromesse > unMoisAvant) {
          // ajouter le don present a this.donReultat
          this.donResultat.push(donTemp);
        }
      });
      this.afficherDons();
    });
  }
  rapportDonsTous() {
    this.donResultat = [];
    //this.a_service.getListeArticles().then(res => this.articleList = res as Article[]);
    this.d_service.getListeDons().then(res => {
      this.donResultat = res as Don[];
      this.afficherDons();
    });
  }
  rapportDonsAccepte() {

  }

  afficherDons() {
    console.log(this.donResultat);
    this.donResultat.forEach(don => {
      don.total = 0;
      console.log(don.DonArticles);
      don.DonArticles.forEach(donArt => {
        don.total += donArt.valeur;

      });
    });

  }



}
