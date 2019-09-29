import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewuserComponent } from './user/newuser/newuser.component';
import { LoginComponent } from './user/login/login.component';
import { NewdonComponent } from './don/newdon/newdon.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ContactezNousComponent } from './pages/contactez-nous/contactez-nous.component';
import { UserComponent } from './user/user.component';
import { RecevoirComponent } from './don/recevoir/recevoir.component';
import { NewemployeComponent } from './user/newemploye/newemploye.component';
import { RapportsComponent } from './pages/rapports/rapports.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'compte', children:[
    {path: 'login', component: LoginComponent},
    {path: 'nouveaucompte', component: NewuserComponent},
    {path: 'profil', component: UserComponent},
    {path: 'nouvelemploye', component: NewemployeComponent}
  ]},
  {path: 'don', children:[
    {path: '', component: NewdonComponent},
    {path: 'recevoir', component: RecevoirComponent}
  ]},
  {path: 'accueil', component: AccueilComponent},
  {path: 'rapports', component: RapportsComponent},
  {path: 'contactez-nous', component: ContactezNousComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
