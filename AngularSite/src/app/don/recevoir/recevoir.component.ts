import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/shared/utilisateur.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
selector: 'app-recevoir',
templateUrl: './recevoir.component.html',
styles: []
})
export class RecevoirComponent implements OnInit {

	constructor(private userService: UtilisateurService, private auth: AuthService) { }
	private listeDons;

	ngOnInit() {
		
	}

}
