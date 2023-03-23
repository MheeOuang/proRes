import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { OrderComponent } from './page/order/order.component';
<<<<<<< Updated upstream
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'main',component:MainComponent},
  {path:'order',component:OrderComponent}

=======
import { BasketComponent } from './page/basket/basket.component';
import { FirstComponent } from './page/first/first.component';
import { LoginCusComponent } from './page/login-cus/login-cus.component';
import { LoginOwnerComponent } from './page/login-owner/login-owner.component';
import { CreateUserComponent } from './page/create-user/create-user.component';

const routes: Routes = [
  {path:'',component:FirstComponent},
  {path:'loginOwner',component:LoginOwnerComponent},
  {path:'loginCus',component:LoginCusComponent},
  {path:'first',component:FirstComponent},
  {path:'main',component:MainComponent},
  {path:'order',component:OrderComponent},
  {path:'basket',component:BasketComponent},
  {path:'createUser',component:CreateUserComponent}
>>>>>>> Stashed changes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
