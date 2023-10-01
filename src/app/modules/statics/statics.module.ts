import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticsRoutingModule } from './statics-routing.module';
import { StaticsComponent } from './statics.component';


@NgModule({
  declarations: [
    StaticsComponent
  ],
  imports: [
    CommonModule,
    StaticsRoutingModule
  ]
})
export class StaticsModule { }
