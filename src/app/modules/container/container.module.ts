import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GlobalService } from '../../services/global.service';

import { ContainerComponent } from './container.component';

import { PreloaderModule } from '../preloader';

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
  	CommonModule,
    RouterModule,

    PreloaderModule
  ],
  providers: [GlobalService],
  exports: [ ContainerComponent ]
})
export class ContainerModule { }
