import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from "@angular/router";
import {FormsModule} from "@angular/forms"
import { RemotecallService} from "./remotecall.service"; 

import { AppComponent } from './app.component';
import { FamilyComponent } from './family/family.component';
import { ProductComponent } from './shop/product/product.component';
import { CatalogComponent } from './shop/catalog/catalog.component';
import { TodoComponent } from './task/todo/todo.component';
import { ApiComponent } from './http/api/api.component';


@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    ProductComponent,
    CatalogComponent,
    TodoComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path :"catalog",
        component: CatalogComponent
      },
      {
        path:"product",
        component : ProductComponent
      },
     
      {
        path:"remote",
        component :ApiComponent
      }
    ]),
  ],
  providers: [RemotecallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
