import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeggieRoutingModule } from './veggie-routing.module';
import { VeggieListComponent } from './veggie-list/veggie-list.component';

@NgModule({
  declarations: [VeggieListComponent],
  imports: [
    CommonModule,
    VeggieRoutingModule
  ]
})
export class VeggieModule { }
