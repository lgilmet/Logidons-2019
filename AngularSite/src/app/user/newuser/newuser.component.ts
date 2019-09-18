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
 
  onSubmit() {

    // this.d_service.promettreDon(this.nouveauDon).subscribe(res => {
    //   console.log(res);
    // });
    this.service.addUtilisateur(this.formData).then(res=>{
      console.log(res);
    });


    ///alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formData));
  }

  constructor(private service: UtilisateurService) { }

  ngOnInit() {
    this.resetForm();
     
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
  }
}
