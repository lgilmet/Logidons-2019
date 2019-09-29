import { Component, OnInit } from '@angular/core';
import { DonService } from 'src/app/shared/don.service';
import { Don } from 'src/app/shared/don.model';

@Component({
  selector: 'app-rapports',
  templateUrl: './rapports.component.html',
  styles: []
})
export class RapportsComponent implements OnInit {
  donResultat: Don[];

  constructor(private d_service: DonService) { }

  ngOnInit() {
    this.donResultat = [];
  }

  rapportDonsDernierMois(){

  }
  rapportDonsTous(){
    //this.a_service.getListeArticles().then(res => this.articleList = res as Article[]);
    this.d_service.getListeDons().then(res => this.donResultat = res as Don[]);
  }
  rapportDonsAccepte(){
    
  }

  

}
