import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticsComponent } from './statics.component';

const routes: Routes = [{ path: '', component: StaticsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticsRoutingModule { }
