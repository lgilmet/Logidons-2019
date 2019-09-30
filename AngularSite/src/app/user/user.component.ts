import { Component, OnInit } from '@angular/core';
import { Don } from '../shared/don.model';
import { DonService } from '../shared/don.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  dons: Don[];

  constructor(
    private d_service: DonService
  ) { }

  ngOnInit() {
    var idUser: number;
    idUser = +localStorage.getItem("userID");
    this.d_service.getDonsDonateur(idUser).then(res => {
    this.dons = res as Don[];
    console.log("this.dons");
    console.log(this.dons);
    this.dons.forEach(don => {
      don.total = 0;
      console.log("don.DonArticles");
      console.log(don.DonArticles);
      don.DonArticles.forEach(donArt => {
        don.total += donArt.valeur;

      });
    });
  });
  }


}
