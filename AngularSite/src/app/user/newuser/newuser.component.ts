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
  usernameValid: boolean;
  usernameTaken: boolean;
  
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
      this.usernameValid = false;

    if (this.formData.username.length >= 6){
      this.usernameValid = true;
    }

    if (this.formData.nom.length >= 2)
      this.nomValid = true;

    if (this.formData.prenom.length >= 2)
      this.prenomValid = true;

      var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (this.formData.email.match(regexp))
      this.emailValid = true;
     

    if (this.formData.password.length >= 4)
      this.passwordValid = true;

      
    if (this.confirmPasswordText.length >= 4 && this.confirmPasswordText==this.formData.password)
      this.confirmePasswordValid = true;

       
  }

  resetForm() {
    this.formData = {
      id:0,
      type: '2',
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
    if(this.formData.email ==""){
      this.emailValid = false;
    } else {
    // call api to check email. -1 means email is free, otherwise, account exists
    this.service.checkEmail(this.formData.email).then(res=>{
      if(res==-1)
        this.emailTaken=false;
      else
        this.emailTaken=true;
    });
    }
  }

  checkUsername(){
    this.service.checkUsername(this.formData.username).then(res=>{
      if(res == -1)
        this.usernameTaken=false;
      else
        this.usernameTaken=true;
    })
  }

  onSubmit() {
    this.service.addUtilisateur(this.formData).subscribe(res=>{
      console.log(res);
      window.location.href = "compte/login";
    });
  }

  annuler(){
    window.location.href = "#";
  }
}
