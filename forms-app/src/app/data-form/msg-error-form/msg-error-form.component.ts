import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'msg-error-form',
  templateUrl: './msg-error-form.component.html',
  styleUrls: ['./msg-error-form.component.sass']
})
export class MsgErrorFormComponent implements OnInit {

  @Input() condicao: boolean;
  @Input() msg: string;

  constructor() { }

  ngOnInit() {
    if (!this.msg)
      this.msg = "Campo obrigatório!";
  }

}
