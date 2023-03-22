import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { OrderComponent } from './page/order/order.component';
import { BasketComponent } from './page/basket/basket.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'main',component:MainComponent},
  {path:'order',component:OrderComponent},
  {path:'basket',component:BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
