import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContectRoutingModule } from './contect-routing.module';
import { ContectComponent } from './contect.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContectComponent
  ],
  imports: [
    CommonModule,
    ContectRoutingModule,
    FormsModule
  ]
})
export class ContectModule { }
