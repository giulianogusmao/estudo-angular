import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { CursosService } from './cursos.service';
import { Pagina } from './pagina.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [Pagina]
})
export class CursosComponent implements OnInit, OnDestroy {
  cursos: any[];

  constructor(
    private _cursosService: CursosService,
    private _route: ActivatedRoute,
    private _pagina: Pagina
  ) { }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();

    // Pagina.inscricao = this._route.queryParams.subscribe(
    this._pagina.inscricao = this._route.queryParams.subscribe(
      (queryParams: any) => {
        let pagina = queryParams['pagina']
        this._pagina.numero = pagina;
      }
    );
  }

  ngOnDestroy() {
    // Pagina.inscricao.unsubscribe();
    this._pagina.inscricao.unsubscribe();
  }
}
