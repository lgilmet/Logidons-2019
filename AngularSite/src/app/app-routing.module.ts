import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewuserComponent } from './user/newuser/newuser.component';
import { LoginComponent } from './user/login/login.component';
import { NewdonComponent } from './don/newdon/newdon.component';

const routes: Routes = [
  {path: '', redirectTo: 'compte/login', pathMatch: 'full'},
  {path: 'compte', children:[
    {path: 'login', component: LoginComponent},
    {path: 'nouveaucompte', component: NewuserComponent},
  ]},
  {path: 'don', children:[
    {path: '', component: NewdonComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
