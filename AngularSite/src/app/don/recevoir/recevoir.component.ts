import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/shared/utilisateur.service';
import { AuthService } from 'src/app/shared/auth.service';
import { DonService } from 'src/app/shared/don.service';
import { Don } from 'src/app/shared/don.model';
import { ArticleService } from 'src/app/shared/article.service';
import { DonArticle } from 'src/app/shared/don-article.model';
import { Utilisateur } from 'src/app/shared/utilisateur.model';
import { Article } from 'src/app/shared/article.model';

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

	listeDons : Don[] = new Array();

	ngOnInit() {
		this.donService.getListeDonsParEmploye(this.auth.getUserId()).then( res => {
			(res as Don[]).forEach(don => {

				//nomDonateur
				this.userService.getUtilisateur(don.idDonateur).then(user => {
					don.nomDonateur = (user as Utilisateur).nom + ", " + (user as Utilisateur).prenom;
				});

				var val = 0;
				don.DonArticles.forEach(art => {
					val += ((art as DonArticle).valeur * (<DonArticle>art).quantite);
					this.articleService.getArticle(art.idArticle).subscribe(a => {
						art.nom = (a as Article).nom;
					});
				});
				don.total = val;
				this.listeDons.push(don);
			});
		});

		//Plus petit au plus grand
		this.listeDons.sort((a,b) => <any>a.createdAt - <any>b.createdAt );
	}
}
