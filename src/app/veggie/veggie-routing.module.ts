import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeggieListComponent } from './veggie-list/veggie-list.component';

const routes : Routes = [ 
  { path: '', component: VeggieListComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeggieRoutingModule { }
