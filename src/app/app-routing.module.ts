import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { OrderComponent } from './page/order/order.component';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'main',component:MainComponent},
  {path:'order',component:OrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
