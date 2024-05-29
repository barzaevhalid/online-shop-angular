import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./shared/main-layout/main-layout.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {CartPageComponent} from "./cart-page/cart-page.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  {
    path: "", component: MainLayoutComponent, children: [
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "home", component: MainPageComponent},
      {path: "product/:id", component: ProductPageComponent},
      {path: "cart", component: CartPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
