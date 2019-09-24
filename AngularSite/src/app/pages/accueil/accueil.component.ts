import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/shared/utilisateur.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styles: []
})
export class AccueilComponent implements OnInit {

  constructor(private u_service: UtilisateurService) { }

  ngOnInit() {
  }

  login(){
    window.location.href = "compte/login";
  }

  newDonateur(){
    this.u_service.newUser = "donateur";
    //this.u_service.newDonateur();
  }

  newBenevole(){
    this.u_service.newUser = "benevole";
    //this.u_service.newBenevole();
  }
}
