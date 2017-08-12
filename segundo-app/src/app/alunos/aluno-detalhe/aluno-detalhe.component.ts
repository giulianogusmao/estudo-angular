import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno: object = {};
  inscricao: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _alunosSevice: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this._route.params.subscribe(
      (params: any) => {
        this.aluno = this._alunosSevice.getAluno(params['id']);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  addAluno() {
    this._router.navigate(['/alunos', 'novo']);
  }

  editarAluno() {
    this._router.navigate(['/alunos', this.aluno['id'], 'editar'])
  }
}
