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
  telephonetravailValid:boolean;

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
     
      var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
   
    if (this.formData.email.length >= 2 &&  this.formData.email.match(regexp))
      this.emailValid = true;
       console.log("email : " + this.formData.email + " match /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ? " + regexp.test(this.formData.email));

    if (this.formData.password.length >= 4)
      this.passwordValid = true;

    if ( this.formData.adresse!=null)
      this.adresseValid = true;
//Validation telephone travail
      var regexTelMaison=new RegExp(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/);
      if(this.formData.telephonetravail.length>=10 && this.formData.telephonetravail.match(regexTelMaison))
      this.telephonetravailValid=true;
  }

  resetForm() {
    this.formData = {
      id:0,
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
