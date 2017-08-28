import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {
  alunos: any[];

  constructor(
    private _alunosService: AlunosService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.alunos = this._alunosService.getAlunos();
  }

  addAluno() {
    this._router.navigate(['/alunos', 'novo']);
  }
}
