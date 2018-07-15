import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContainerComponent } from './container.component';

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
  	CommonModule,
    RouterModule
  ],
  providers: [],
  exports: [ ContainerComponent ]
})
export class ContainerModule { }
