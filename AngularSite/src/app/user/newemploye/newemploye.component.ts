import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/shared/utilisateur.model';
import { UtilisateurService } from 'src/app/shared/utilisateur.service';

@Component({
  selector: 'app-newemploye',
  templateUrl: './newemploye.component.html',
  styles: []
})
export class NewemployeComponent implements OnInit {
  formData: Utilisateur;
  passwordValid: boolean;
  confirmePasswordValid: boolean;
  nomValid: boolean;
  confirmPasswordText: String;
  prenomValid: boolean;
  emailValid: boolean;
  adresseValid:boolean;
  typeUser: string;
 
  constructor(private service: UtilisateurService) { }

  ngOnInit() {
    this.resetForm();
    this.typeUser = '';
    this.typeUser = this.service.newUser;
    console.log(this.service.newUser);
  }

  checkValid() {
      this.nomValid = false;
      this.prenomValid = false;
      this.emailValid = false;
      this.passwordValid = false;
      this.confirmePasswordValid = false;

    if (this.formData.nom.length >= 4)
      this.nomValid = true;

    if (this.formData.prenom.length >= 4)
      this.prenomValid = true;

    if (this.formData.email.length >= 4)
      this.emailValid = true;

    if (this.formData.password.length >= 4)
      this.passwordValid = true;

    if ( this.formData.adresse!=null)
      this.adresseValid = true;
  }

  resetForm() {
    this.formData = {
      IDutilisateur:0,
      type: '',
      nom: '',
      prenom: '',
      telephonetravail: '',
      telephoneMaison: '',
      telephoneMobile: '',
      salaire: 0,
      adresse: '',
      email: '',
      username: '',
      password: '',
    }
    this.confirmPasswordText="";
  }
  onSubmit() {
    this.service.addUtilisateur(this.formData).subscribe(res=>{
      console.log(res);
    });
  }
   
}
