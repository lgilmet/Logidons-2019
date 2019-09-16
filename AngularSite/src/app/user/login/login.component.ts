import { Component, OnInit } from '@angular/core';
import { FormGroup, Form } from '@angular/forms';
import { Utilisateur } from 'src/app/shared/utilisateur.model';
import { UtilisateurService } from 'src/app/shared/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  form: Utilisateur;
  constructor(private service: UtilisateurService) { }

  ngOnInit() {
    this.resetForm();
  }

  public soumettre(form:Form)
  {
    
  }

  public resetForm()
  {
    this.form = {
      IDutilisateur: 0,
      type: "",
      nom: "",
      prenom: "",
      telephonetravail: "",
      telephoneMaison: "",
      telephoneMobile: "",
      salaire: 0,
      adresse: "",
      email: "",
      username: "",
      password: ""
    }
  }

}
