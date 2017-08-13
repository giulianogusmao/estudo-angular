import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// assets
import { MaterializeModule } from 'angular2-materialize';

// modulos
import { AppRoutingModule } from './app.routing.module';

// Services
import { AuthenticateGuard } from './guards/authenticate.guard';
import { AuthenticationService } from './login/authentication.service';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    AppRoutingModule,
  ],
  providers: [
    AuthenticationService,
    AuthenticateGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
