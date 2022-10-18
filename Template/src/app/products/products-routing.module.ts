import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [{ path: '', component: ProductsComponent },
{path:'products/products-list',component:ProductsListComponent},
{path:'products/product-details/:id',component:ProductDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
