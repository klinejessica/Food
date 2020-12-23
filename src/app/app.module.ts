import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { SimpleDirective } from './simple.directive';

import { AppRoutingModule} from './app-routing.module';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { ItemService } from './grocery/Service/itemservice';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';





@NgModule({
  declarations: [
    AppComponent,
    SimpleDirective,
    LoginComponent,
    NavigationComponent
   
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    CustomerModule,
    HttpClientModule,
    AppRoutingModule,
     SidebarModule,
     ButtonModule,
     TimelineModule
    
    

  ],
  providers: [ItemService],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
