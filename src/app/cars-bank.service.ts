import { Injectable } from '@angular/core';

import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsBankService {

  private carsList: Car[] = []; // list of cars

  constructor() { }

  get cars(): Car[] {
    return this.carsList;
  }

  /**
   * It change car model by index
   * @param index index of car model in the list
   * @param car updated car model
   */
  changeCar(index: number, car: Car) {
    this.carsList[index] = car;
  }

  /**
   * It returns car model by index
   * @param index index for returning car model
   */
  oneCar(index: number): Car {
    return this.carsList[index];
  }

  /**
   * It adds car to list
   * @param car car model which need to add
   */
  pushCar(car: Car) {
    this.carsList.push(car);
  }

}
