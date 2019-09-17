import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { NewuserComponent } from './user/newuser/newuser.component';
import { DonComponent } from './don/don.component';
import { NewdonComponent } from './don/newdon/newdon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UtilisateurService } from './shared/utilisateur.service';
import { MustMatchDirective } from './user/newuser/header/must-match.directive';
import { AuthService } from './shared/auth.service';
 
 

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    NewuserComponent,
    DonComponent,
    NewdonComponent,
    NavbarComponent,
    MustMatchDirective
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  
 
  providers: [UtilisateurService, AuthService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
