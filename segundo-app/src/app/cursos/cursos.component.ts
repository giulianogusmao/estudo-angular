import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { CursosService } from './cursos.service';
import { Pagina } from './pagina';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [Pagina]
})
export class CursosComponent implements OnInit, OnDestroy {
  pagina: Pagina;
  cursos: any[];

  constructor(
    private _cursosService: CursosService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.pagina = new Pagina();
    // this.pagina = new Pagina(this._route, this._router);
  }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();

    // Pagina.inscricao = this._route.queryParams.subscribe(
    this.pagina.inscricao = this._route.queryParams.subscribe(
      (queryParams: any) => {
        let pagina = queryParams['pagina']
        this.pagina.numero = pagina;
      }
    );
  }

  ngOnDestroy() {
    // Pagina.inscricao.unsubscribe();
    this.pagina.inscricao.unsubscribe();
  }

  proximaPagina() {
    this.pagina.proximaPagina();
    this._goToPagina();
  }

  voltarPagina() {
    this.pagina.voltarPagina();
    this._goToPagina();
  }

  private _goToPagina() {
    this._router.navigate(['/cursos'], { queryParams: { pagina: this.pagina.numero }});
  }
}
