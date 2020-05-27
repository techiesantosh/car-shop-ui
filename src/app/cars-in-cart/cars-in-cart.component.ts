import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cars-in-cart',
  templateUrl: './cars-in-cart.component.html',
  styleUrls: ['./cars-in-cart.component.css']
})
export class CarsInCartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() car: any;
  @Output() carRemoved = new EventEmitter();
  modelChanged(car) {
  
      this.carRemoved.emit(this.car)
     
  }

}
