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
  typeUser: string;
  emailTaken:boolean;
  passwordNonConform:boolean;
  

  
 
  constructor(private service: UtilisateurService) { }

  ngOnInit() {
    this.resetForm();
    this.typeUser = '';
    this.typeUser = this.service.newUser;
   // console.log(this.service.newUser);
  }

  onChange(){
    console.log("Radio value : "+this.formData.type)
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

    if (this.formData.email.length >= 5 && this.formData.email.match(regexp))
      this.emailValid = true;
     

    if (this.formData.password.length >= 4)
      this.passwordValid = true;

      
    if (this.confirmPasswordText==this.formData.password)
      this.confirmePasswordValid = true;

       
  }

  resetForm() {
    this.formData = {
      id:0,
      type: 'donateur',
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

  checkEmail(){
    // call api to check email. -1 means email is free, otherwise, account exists
    this.service.checkEmail(this.formData.email).then(res=>{
      if(res==-1){
        
        console.log("Email libre");
       this.emailTaken=false;
      }     
      
      else{
        console.log("Vous etes l'utilisateur "+res);
        this.emailTaken=true;
        console.log("Email pris  " +this.emailTaken);
      }
     
    });
   
    
  }

  onSubmit() {
    this.service.addUtilisateur(this.formData).subscribe(res=>{
      console.log(res);
    });
  }

  annuler(){
    window.location.href = "#";
  }
}
