import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddresstableComponent } from './addresstable.component';

const routes: Routes = [{
  path:"", component:AddresstableComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddresstableRoutingModule { }
