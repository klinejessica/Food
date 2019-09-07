import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

import { VeggieRoutingModule } from './veggie-routing.module';
import { VeggieListComponent } from './veggie-list/veggie-list.component';

@NgModule({
  declarations: [VeggieListComponent],
  imports: [
    CommonModule,
    VeggieRoutingModule,
    CardModule
  ]
})
export class VeggieModule { }
