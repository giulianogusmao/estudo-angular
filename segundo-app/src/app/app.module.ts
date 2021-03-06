import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// assets
import { MaterializeModule } from 'angular2-materialize';

// modulos
import { AppRoutingModule } from './app.routing.module';

// Services
import { UsuariosService } from './login/usuarios.service';
import { AuthenticateGuard } from './guards/authenticate.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthenticationService } from './login/authentication.service';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterializeModule,
    AppRoutingModule,
  ],
  providers: [
    UsuariosService,
    AuthenticationService,
    AuthenticateGuard,
    CursosGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
