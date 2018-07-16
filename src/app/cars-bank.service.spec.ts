import { TestBed, inject } from '@angular/core/testing';

import { CarsBankService } from './cars-bank.service';

import { Car } from './car.model';

describe('CarsBankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarsBankService]
    });
  });

  it('should be created', inject([CarsBankService], (service: CarsBankService) => {
    expect(service).toBeTruthy();
  }));

  it('length of cars array has to be equal 1', inject([CarsBankService], (service: CarsBankService) => {
    service.pushCar(new Car('JTHBK1EG8B2416866', 'audi', 'a3', 2012, 'Sedan'));
    expect(service.cars.length).toBe(1);
  }));

  it('has to return car with index 1', inject([CarsBankService], (service: CarsBankService) => {
    service.pushCar(new Car('JTHBK1EG8B2416866', 'audi', 'a3', 2012, 'Sedan'));
    expect(service.oneCar(0) instanceof Car).toBeTruthy(true);
  }));

  it('has to update car with index 1', inject([CarsBankService], (service: CarsBankService) => {
    service.pushCar(new Car('JTHBK1EG8B2416866', 'audi', 'a3', 2012, 'Sedan'));
    const updatCar = new Car('NEWBK1EG8B2416866', 'newi', 'new1', 2013, 'Bus');
    service.changeCar(0, updatCar);
    expect(updatCar === service.oneCar(0)).toBeTruthy(true); // should have a common link
  }));

});
