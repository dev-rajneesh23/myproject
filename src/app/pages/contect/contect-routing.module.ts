import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContectComponent } from './contect.component';

const routes: Routes = [
  {path:"", component:ContectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContectRoutingModule { }
