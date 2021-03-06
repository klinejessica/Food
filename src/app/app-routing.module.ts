import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule) },
  { path: 'login', component: LoginComponent},
  { path: 'veggies', loadChildren: () => import('./veggie/veggie.module').then(mod => mod.VeggieModule)},
  { path: 'fruit', loadChildren: () => import('./fruit/fruit.module').then(mod => mod.FruitModule)},
  { path: 'plan', loadChildren: () => import('./plan/plan.module').then(mod => mod.PlanModule)},
  { path: 'grocery', loadChildren: () => import('./grocery/grocery.module').then(mod => mod.GroceryModule)},
  { path: 'nutrition', loadChildren: () => import('./nutrition/nutrition.module'). then(mod => mod.NutritionModule)}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes,
      {enableTracing: true}),

    CommonModule
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [HomeComponent, TodoTaskComponent, VeggieComponent, FruitComponent]
