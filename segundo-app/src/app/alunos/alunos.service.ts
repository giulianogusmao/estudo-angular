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

  private _getAlunoIndex(id: number): number {
    return this.alunos.findIndex(aluno => aluno.id === id);
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

  saveAluno(aluno: object): number {
    // verifica se o aluno possui um id, caso possua procura o aluno na lista e atualiza seus dados
    if (aluno['id']) {
      let index: number = this._getAlunoIndex(aluno['id']);
      if (index >= 0) {
        this.alunos.splice(index, 1, aluno);
        return aluno['id'];
      }
    }

    // caso o aluno não possua um id, cria um novo objeto, instancia com os valores recebidos e insere na lista de alunos
    let id = 0;
    for (let aluno of this.getAlunos()) {
      if (aluno['id'] > id)
        id = aluno['id'];
    }

    let novoAluno = new Aluno((id + 1), aluno['nome'], aluno['email']);
    this.alunos.push(novoAluno);
    return novoAluno['id'];
  }

  deleteAluno(id: number): void {
    let index: number = this._getAlunoIndex(id);
    this.alunos.splice(index, 1);
  }
}
