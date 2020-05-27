import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsInCartComponent } from './cars-in-cart.component';

describe('CarsInCartComponent', () => {
  let component: CarsInCartComponent;
  let fixture: ComponentFixture<CarsInCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsInCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
