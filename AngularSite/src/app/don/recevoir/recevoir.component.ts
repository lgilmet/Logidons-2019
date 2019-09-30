import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/shared/utilisateur.service';
import { AuthService } from 'src/app/shared/auth.service';
import { DonService } from 'src/app/shared/don.service';
import { Don } from 'src/app/shared/don.model';
import { ArticleService } from 'src/app/shared/article.service';
import { DonArticle } from 'src/app/shared/don-article.model';
import { Utilisateur } from 'src/app/shared/utilisateur.model';

@Component({
selector: 'app-recevoir',
templateUrl: './recevoir.component.html',
styles: []
})

export class RecevoirComponent implements OnInit {

	private 

	constructor(
		private donService: DonService,
		private auth: AuthService,
		private userService: UtilisateurService,
		private articleService: ArticleService) { }

	listeDons : Don[];

	ngOnInit() {
		this.donService.getListeDonsParEmploye(this.auth.getUserId()).then( res => {
			(res as Don[]).forEach(don => {
				var donAff = new Don();

				//nomDonateur
				this.userService.getUtilisateur(don.idDonateur).then(user => {
					//donAff.nomDonateur = (user as Utilisateur).nom + ", " + (user as Utilisateur).prenom;
				});

				var val = 0;
				donAff.DonArticles.forEach(art => {
					val += art.valeur;
					console.log("VAL: " + val + " | val art : " + art.valeur);
				});
			});
		});
	}

}
