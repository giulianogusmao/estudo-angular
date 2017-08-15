import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { DropdownService } from './services/dropdown.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
  ],
  providers: [
    DropdownService
  ]
})
export class SharedModule { }
