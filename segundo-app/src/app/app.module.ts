import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// assets
import { MaterializeModule } from 'angular2-materialize';

// modulos
import { AppRoutingModule } from './app.routing.module';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
