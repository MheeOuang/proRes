import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './page/header/header.component';
import { MainComponent } from './page/main/main.component';
import { OrderComponent } from './page/order/order.component';
import { BasketComponent } from './page/basket/basket.component';
import { LoginCusComponent } from './page/login-cus/login-cus.component';
import { LoginOwnerComponent } from './page/login-owner/login-owner.component';
import { CreateUserComponent } from './page/create-user/create-user.component';
import { FirstComponent } from './page/first/first.component';
import { Basket2Component } from './page/basket2/basket2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    OrderComponent,
    OrderComponent,
    BasketComponent,
    LoginCusComponent,
    LoginOwnerComponent,
    CreateUserComponent,
    FirstComponent,
    Basket2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
