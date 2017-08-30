import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { NgRedux, NgReduxModule } from 'ng2-redux';

import { AppComponent } from './app.component';
import { IAappState, rootReducer, INITIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  contructor(ngRedux: NgRedux<IAappState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
