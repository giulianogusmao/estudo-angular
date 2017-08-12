import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {
  private alunos: any[] = [
    { id: 1, nome: 'Fulano', email: 'fulano@bol.com.br' },
    { id: 2, nome: 'Ciclano', email: 'cicle19@hotmail.com' },
    { id: 3, nome: 'Beltrano', email: 'beltrano@uol.com.br' }
  ];

  constructor() { }

  getAlunos(): any[] {
    return this.alunos;
  }

  getAluno(id: number): object {
    let aluno = this.alunos.filter(
      (aluno) => { 
        return aluno['id'] == id;
      }
    )

    return aluno.length ? aluno[0] : {};
  }

  saveAluno(aluno: object) {
    let update = false;
      console.log(aluno);

    for(let i=0, max=this.alunos.length; i<max; i++) {
      if (this.alunos[i]['id'] == aluno['id']) {
        this.alunos.splice(i, 1, aluno);
        update = true;
      }
    }

    if (!update) {
      console.log('new user add');
      
      let id = 0;

      for (let aluno of this.alunos) {
        if (aluno['id'] > id)
          id = aluno['id'];
      }

      aluno['id'] = id + 1;
      this.alunos.push(aluno);
      console.log(this.alunos);
    }
  }
}
