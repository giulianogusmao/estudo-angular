import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunosService {
  private alunos: Aluno[] = [
    { id: 1, nome: 'Fulano', email: 'fulano@bol.com.br' },
    { id: 2, nome: 'Ciclano', email: 'cicle19@hotmail.com' },
    { id: 3, nome: 'Beltrano', email: 'beltrano@uol.com.br' }
  ];

  constructor() { }

  clearAlunos(): void {
    this.alunos = [];
  }

  getAlunos(): Aluno[] {
    return this.alunos;
  }

  getAluno(id: number): Aluno | object {
    let aluno = this.alunos.filter(
      (aluno) => {
        return aluno['id'] == id;
      }
    )

    return aluno.length ? aluno[0] : {};
  }

  saveAluno(aluno: object) {
    let update = false;
      // console.log(aluno);

    for(let i=0, max=this.alunos.length; i<max; i++) {
      if (this.alunos[i]['id'] == aluno['id']) {
        this.alunos.splice(i, 1, aluno);
        update = true;
      }
    }

    if (!update) {
      let id = 0;
      for (let aluno of this.getAlunos()) {
          if (aluno['id'] > id)
            id = aluno['id'];
      }

      let novoAluno = new Aluno((id + 1), aluno['nome'], aluno['email']);
      this.alunos.push(novoAluno);
    }
  }
}
