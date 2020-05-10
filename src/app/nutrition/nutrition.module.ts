import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitaminsComponent } from './vitamins/vitamins.component';
import { NutritionRoutingModule} from './nutrition-routing.module';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
  declarations: [VitaminsComponent],
  imports: [
    CommonModule,
    NutritionRoutingModule,
    AccordionModule
  ]
})
export class NutritionModule { }
