import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy {
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

        if (!this.aluno['id']) {
          this.aluno['nome'] = null;
          this.aluno['email'] = null;
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  addAluno() {
    this._router.navigate(['/alunos', 'novo']);
  }

  salvar(aluno: object) {
    this._alunosSevice.saveAluno(aluno);
  }  
}
