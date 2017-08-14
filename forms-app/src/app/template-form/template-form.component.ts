import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.sass']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    // nome: 'Giuliano',
    // email: 'giuliano@teste.com'
  }
  // email: string = 'teste@teste.com';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log('send form');
    console.log(form);
    // console.log(this.usuario);
  }
}
