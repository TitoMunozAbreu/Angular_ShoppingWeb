import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'mens-clothing', component: ProductsComponent },
  {path: 'mens-clothing', component: ProductsComponent },
  {path: 'womens-clothing', component: ProductsComponent },
  {path: 'electronics', component: ProductsComponent },
  {path: 'jewelery', component: ProductsComponent },
  {path: 'pageNotFound', component: PageNotFoundComponent },
  {path: '**', redirectTo: 'pageNotFound'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
