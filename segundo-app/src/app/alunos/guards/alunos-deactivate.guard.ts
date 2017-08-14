import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { iFormCanDeactivate } from './../../guards/iform-candeactivate';
// import { AlunoFormComponent } from './../aluno-form/aluno-form.component';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<iFormCanDeactivate> {
  canDeactivate(
    component: iFormCanDeactivate,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // return component.podeMudarRota();
    return component.podeDesativar();
  }
}
