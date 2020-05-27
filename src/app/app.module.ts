import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarListComponent } from './car-list/car-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CarsInCartComponent } from './cars-in-cart/cars-in-cart.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarListComponent,
    ShoppingCartComponent,
    CarsInCartComponent
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
