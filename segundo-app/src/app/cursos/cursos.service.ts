import { Injectable } from '@angular/core';

class Curso {
  id: number;
  nome: string;

  constructor(
    id: number,
    nome: string = ''
  ) {}
}

@Injectable()
export class CursosService {

  private _cursos: any[] = [
      // new Curso(1, 'Angular'),
      // new Curso(2, 'Java'),
      { id: '1', nome: 'Angular' },
      { id: '2', nome: 'Angular 2' },
      { id: '3', nome: 'Java' },
    ];

  constructor() {
    // this._cursos = [
    //   { id: '1', nome: 'Angular' },
    //   { id: '2', nome: 'Angular 2' },
    //   { id: '3', nome: 'Java' },
    // ];
  }

  getCursos(): Curso[] {
    return this._cursos;
  }

  getCurso(id: number): object {
    // let curso: any[] = this.getCursos().filter(
    //   (item: object) => { return item.id == id }
    // );

    for (const curso of this.getCursos()) {
      if (curso.id == id) {
        return curso;
      }
    }

    return {};
  }
}