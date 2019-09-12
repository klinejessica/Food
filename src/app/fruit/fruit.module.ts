import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

import { FruitRoutingModule } from './fruit-routing.module';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [FruitListComponent],
  imports: [
    CommonModule,
    FruitRoutingModule,
    CardModule,
    ButtonModule
  ]
})
export class FruitModule { }
