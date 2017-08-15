import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-debug-form',
  templateUrl: './debug-form.component.html',
  styleUrls: ['./debug-form.component.sass']
})
export class DebugFormComponent implements OnInit {

  @Input() form;

  constructor() { }

  ngOnInit() {
    // console.log(this.form);
  }

}
