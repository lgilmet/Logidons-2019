import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/shared/utilisateur.model';
import { UtilisateurService } from 'src/app/shared/utilisateur.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styles: []
})
export class NewuserComponent implements OnInit {
  formData: Utilisateur;
   
  passwordValid: boolean;
  confirmePasswordValid: boolean;
  nomValid: boolean;
  confirmPasswordText: String;
  prenomValid: boolean;
  emailValid: boolean;

 
  onSubmit() {

    // this.d_service.promettreDon(this.nouveauDon).subscribe(res => {
    //   console.log(res);
    // });
    this.service.addUtilisateur(this.formData).subscribe(res=>{
      console.log(res);
      //alert("Bonjour "+res.nom);
      
    });


    ///alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formData));
  }

  constructor(private service: UtilisateurService) { }

  ngOnInit() {
    this.resetForm();
     
  }

  checkValid() {
    if (this.formData.nom.length >= 4)
      this.nomValid = true;
    else
      this.nomValid = false;

    if (this.formData.prenom.length >= 4)
      this.prenomValid = true;
    else
      this.prenomValid = false;

    if (this.formData.email.length >= 4)
      this.emailValid = true;
    else
      this.emailValid = false;

    if (this.formData.password.length >= 4)
      this.passwordValid = true;
    else
      this.passwordValid = false;

    if (this.confirmPasswordText.length >= 4 && this.confirmPasswordText==this.formData.password)
      this.confirmePasswordValid = true;
    else
      this.confirmePasswordValid = false;
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
}
