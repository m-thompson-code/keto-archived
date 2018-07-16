import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ActionIconComponent } from './actionIcon.component';

@NgModule({
  declarations: [
    ActionIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ ActionIconComponent ]
})
export class ActionIconModule {
}
