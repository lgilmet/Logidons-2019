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
  passwordValid: boolean;
  userValid: boolean;
  constructor(private service: UtilisateurService) { }

  ngOnInit() {
    this.resetForm();
  }

  checkValid()
  {
    if(this.form.username.length >= 4)
      this.userValid = true;
    else
      this.userValid = false;
    if(this.form.password.length >= 4)
      this.passwordValid = true;
    else
      this.passwordValid = false;
  }

  public soumettre(form:Form)
  {
    
  }

  public resetForm()
  {
    this.passwordValid = false;
    this.userValid = false;
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
