import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { EventEmitter } from '@angular/core';

@Injectable()
export class AuthenticationService {
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.login == 'giuliano' && usuario.senha == 'teste') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  logout() {
    setTimeout(()=>{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
      this.router.navigate(['/login']);
    }, 1);
  }

}
