import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthenticationService } from './../login/authentication.service';

@Injectable()
export class AuthenticateGuard implements CanActivate, CanLoad {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // verifica se o usuário tem acesso à aplicação
    return this._verificaAutenticacao();
  }
  
  canLoad(
    route: Route
  ): Observable<boolean> | Promise<boolean> | boolean {
    // verifica se o usuário pode carregar o módulo
    return this._verificaAutenticacao();
  }

  private _verificaAutenticacao (): boolean {
    if (this.authenticationService.isAutenticado()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
