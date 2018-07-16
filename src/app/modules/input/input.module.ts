import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GlobalService } from '../../services/global.service';

import { InputComponent } from './input.component';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [GlobalService],
  exports: [ InputComponent ]
})
export class InputModule {
}
