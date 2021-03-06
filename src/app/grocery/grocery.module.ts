import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryRoutingModule } from './grocery-routing.module';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import {DragDropModule} from 'primeng/dragdrop';
import {PanelModule} from 'primeng/panel';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [GroceryListComponent],
  imports: [
    CommonModule,
    GroceryRoutingModule,
    DragDropModule,
    TableModule,
    PanelModule,
    ButtonModule
  ]
})
export class GroceryModule { }
