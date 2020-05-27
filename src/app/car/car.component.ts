import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input() car: any;
  @Output() carAdded = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  addCarToCart(car) {
    this.carAdded.emit(car);
  }

}
