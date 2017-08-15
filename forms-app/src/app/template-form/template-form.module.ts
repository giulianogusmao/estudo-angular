import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DebugFormModule } from './../debug-form/debug-form.module';
import { TemplateFormComponent } from './template-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DebugFormModule
  ],
  declarations: [
    TemplateFormComponent
  ]
})
export class TemplateFormModule { }
