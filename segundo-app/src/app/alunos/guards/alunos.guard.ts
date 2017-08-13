import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationEnd } from '@angular/router';

import { AuthenticationService } from './../../login/authentication.service';

@Injectable()
export class AlunosGuard implements CanActivateChild, OnDestroy {
  previousUrl: string;
  inscricaoPreviousUrl: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.inscricaoPreviousUrl = router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(e => {
        this.previousUrl = e['url'];
      });
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // console.log('guarda de rotas alunos');

    if (!this.authenticationService.usuario.admin) {
      if (
        state.url.includes('editar') ||
        state.url.includes('novo')
      ) {
        alert('Usuário sem acesso');
        this.router.navigate([this.previousUrl ? this.previousUrl : '/alunos']);
        return Observable.of(false);
      }
    }

    return true;
  }

  ngOnDestroy() {
    this.inscricaoPreviousUrl.unsubscribe();
  }
}
