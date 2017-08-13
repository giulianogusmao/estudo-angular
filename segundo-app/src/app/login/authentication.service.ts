import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { UsuariosService } from './usuarios.service';

@Injectable()
export class AuthenticationService {
  usuario: Usuario;
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private usuariosService: UsuariosService
  ) { }

  private setAuthenticate(condition: boolean, usuario: Usuario = <Usuario>{}) {
    this.usuario = usuario;
    this.usuarioAutenticado = condition;
    this.mostrarMenuEmitter.emit(condition);
  }

  fazerLogin(usuario: Usuario): void | boolean {
    if (this.usuariosService.validaUsuario(usuario)) {
      this.setAuthenticate(true, usuario);
      this.router.navigate(['/']);
    } else {
      this.setAuthenticate(false);
      return false;
    }
  }

  logout(): void {
    setTimeout(() => {
      this.setAuthenticate(false);
      this.router.navigate(['/login']);
    }, 1);
  }

  isAutenticado(): boolean {
    return this.usuarioAutenticado;
  }

}
