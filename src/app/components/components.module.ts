import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    ProductComponent,
    ProductsComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
    
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    PageNotFoundComponent
  ]
})
export class ComponentsModule { }
