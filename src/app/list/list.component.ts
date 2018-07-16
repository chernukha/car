import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CarsBankService } from '../cars-bank.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  @Output() formOpen = new EventEmitter<boolean>(); // event for opening form
  @Output() chosenCar = new EventEmitter<number>(); // event with index of chosen car
  cars: Car[] = [];

  constructor (private carsBankServie: CarsBankService) { }

  ngOnInit() {
    this.cars = this.carsBankServie.cars;
  }

  /**
   * It emits event with car index
   * @param index index of chosen car
   */
  chooseCar(index: number) {
    this.chosenCar.emit(index);
  }

  /**
   * It emits event for showing form
   */
  showForm() {
    this.formOpen.emit(true);
  }

}
