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

}
