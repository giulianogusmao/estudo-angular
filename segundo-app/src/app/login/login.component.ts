import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [Usuario]
})
export class LoginComponent implements OnInit {
  msg: string = null;

  constructor(
    private usuario: Usuario,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  login() {
    this.msg = (!this.authenticationService.fazerLogin(this.usuario)) ? 'Usuário ou senha inválido' : null;
  }
  
}
