import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DebugFormModule } from './../debug-form/debug-form.module';
import { SharedModule } from './../shared/shared.module';
import { DataFormComponent } from './data-form.component';
import { MsgErrorFormComponent } from './msg-error-form/msg-error-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DebugFormModule,
    SharedModule
  ],
  declarations: [
    DataFormComponent,
    MsgErrorFormComponent
  ]
})
export class DataFormModule { }
