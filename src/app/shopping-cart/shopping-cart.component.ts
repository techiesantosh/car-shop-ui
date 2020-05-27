import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() cars: any[];
  @Output() carsRemoved = new EventEmitter();
  calcTotal() {
    return this.cars.length;
  }

  totalAmount() {
    var price =0;
     this.cars.forEach(element => {
      price += element.price;
    });
    return price;
  }
  removeCar(car) {
    this.carsRemoved.emit(car)
  }

}
