import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { NewuserComponent } from './user/newuser/newuser.component';
import { DonComponent } from './don/don.component';
import { NewdonComponent } from './don/newdon/newdon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UtilisateurService } from './shared/utilisateur.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    NewuserComponent,
    DonComponent,
    NewdonComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UtilisateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
