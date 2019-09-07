import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

import { FruitRoutingModule } from './fruit-routing.module';
import { FruitListComponent } from './fruit-list/fruit-list.component';

@NgModule({
  declarations: [FruitListComponent],
  imports: [
    CommonModule,
    FruitRoutingModule,
    CardModule
  ]
})
export class FruitModule { }
