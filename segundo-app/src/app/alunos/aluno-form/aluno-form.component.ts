import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { iFormCanDeactivate } from './../../guards/iform-candeactivate';
import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy, iFormCanDeactivate {
  aluno: object = {};
  inscricao: Subscription;
  private formMudou: boolean = false;

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

  addAluno(): void {
    this._router.navigate(['/alunos', 'novo']);
  }

  salvar(aluno: object): void {
    this._alunosSevice.saveAluno(aluno);
    this.formMudou = false;
    this._router.navigate(['/alunos']);
  } 

  cancelar(): void {
    this._router.navigate(['/alunos']);
  }

  onInput(): void {
    this.formMudou = true;
  }

  podeMudarRota() {
    if (this.formMudou) {
      return confirm('Tem certeza que deseja sair desta página? As mudanças não serão salvas.');
    }

    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }
}
