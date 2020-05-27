import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cars : Car[] =[];

  constructor(private dataService: CarService) { }

  ngOnInit() {

    this.dataService.sendGetRequest().subscribe((data: Car[])=>{
      console.log(data);
      this.cars = data;
    })  
  }

  carCart = [];

 addCarToCart(car) {
   const carExistInCart = this.carCart.find(({make}) => make === car.make); 
   if (!carExistInCart) {
     this.carCart.push({...car, num:1}); 
     return;
   }
   carExistInCart.num += 1;
 }
  removeCar(car) {
   this.carCart = this.carCart.filter(({make}) => make !== car.make)
  }
}
