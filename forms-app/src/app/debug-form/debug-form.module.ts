import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebugFormComponent } from './debug-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DebugFormComponent
  ],
  exports: [
    DebugFormComponent
  ]
})
export class DebugFormModule { }
