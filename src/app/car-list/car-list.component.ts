import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() cars: any[];
  @Output() carAdded = new EventEmitter();
  addCarToCart(car) {
    this.carAdded.emit(car);
  }

}
