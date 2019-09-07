import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan/plan.component';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [PlanComponent],
  imports: [
    CommonModule,
    PlanRoutingModule, 
    ButtonModule
  ]
})
export class PlanModule { }
