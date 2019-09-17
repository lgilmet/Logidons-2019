import { Component, OnInit } from '@angular/core';
import { FormGroup, Form } from '@angular/forms';
import { Utilisateur } from 'src/app/shared/utilisateur.model';
import { UtilisateurService } from 'src/app/shared/utilisateur.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  form: Utilisateur;
  passwordValid: boolean;
  userValid: boolean;
  test: number;
  constructor(private user_service: UtilisateurService, private auth_service: AuthService) { }

  ngOnInit() {
    this.resetForm();
    this.test = 0;
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

  public soumettre()
  {
    console.log("soumettre IF?");
    if(this.userValid && this.passwordValid)
    {
      console.log("soumettre IN");
      this.auth_service.login(this.form.username, this.form.password);
    }
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
