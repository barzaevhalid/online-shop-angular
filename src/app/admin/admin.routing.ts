import {RouterModule, Routes} from "@angular/router";
import {AdminLayoutComponent} from "./shared/admin-layout/admin-layout.component";
import {NgModule} from "@angular/core";
import {LoginPageComponent} from "./login-page/login-page.component";
import {DashboardPageComponent} from "./dashboard-page/dashboard-page.component";
import {AddPageComponent} from "./add-page/add-page.component";
import {OrdersPageComponent} from "./orders-page/orders-page.component";
import {EditPageComponent} from "./edit-page/edit-page.component";


const routes: Routes = [
  {
      path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: "/admin/login", pathMatch: "full"},
      {path: "login", component: LoginPageComponent},
      {path: "dashboard", component: DashboardPageComponent},
      {path: "add", component: AddPageComponent},
      {path: "orders", component: OrdersPageComponent},
      {path: "product/:id/edit", component: EditPageComponent},
    ]
    }

]

@NgModule(({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
}))
export class AdminRouting{}
