import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAappState } from './store';
import * as action from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Count with redux';
  counter: number = 0;

  constructor(
    private ngRedux: NgRedux<IAappState>
  ) { }

  increment() {
    // this.counter++;
    this.ngRedux.dispatch({ type: action.INCREMENT });
  }

  decrement() {
    // this.counter--;
    this.ngRedux.dispatch({ type: action.DECREMENT });
  }
}
