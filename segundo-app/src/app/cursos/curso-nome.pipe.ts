import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cursoNome'
})
export class CursoNomePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return;
    return value.toLowerCase();
  }

}
