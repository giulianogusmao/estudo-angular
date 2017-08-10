import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { CursosService } from './../cursos/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  private _inscricao: Subscription;
  curso: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _cursosService: CursosService
  ) { }

  ngOnInit() {
    this._inscricao = this._route.params.subscribe(
      (params: any) => {
        this.curso = this._cursosService.getCurso(params['id']);

        if(this.curso.id == null) {
          this._router.navigate(['/curso/404']);
        }
      }
    )
  }

  ngOnDestroy() {
    this._inscricao.unsubscribe();
  }
}
