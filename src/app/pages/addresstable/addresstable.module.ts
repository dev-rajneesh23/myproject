import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddresstableRoutingModule } from './addresstable-routing.module';
import { AddresstableComponent } from './addresstable.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddresstableComponent
  ],
  imports: [
    CommonModule,
    AddresstableRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddresstableModule { }
