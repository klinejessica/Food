import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan/plan.component';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PlanComponent],
  imports: [
    CommonModule,
    PlanRoutingModule, 
    ButtonModule,
    InputTextareaModule,
    FormsModule 
  ]
})
export class PlanModule { }
