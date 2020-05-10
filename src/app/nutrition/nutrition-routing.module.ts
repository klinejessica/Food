import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VitaminsComponent } from './vitamins/vitamins.component';

const routes: Routes = [
    { path: '', component: VitaminsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class NutritionRoutingModule { }