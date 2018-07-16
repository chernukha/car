import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { CarsBankService } from '../cars-bank.service';
import { Car } from '../car.model';

describe('ListComponent', () => {
  let listComponent: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let carBankService: CarsBankService;
  let car: Car;
  let listElement: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers: [CarsBankService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ListComponent);
    listComponent = fixture.componentInstance;
    listElement = fixture.nativeElement;
  }));

  it('should create', () => {
    expect(listComponent).toBeTruthy();
  });

  it('should has .no-car', () => {
    fixture.detectChanges();
    expect(listElement.getElementsByClassName('no-car').length).toBeTruthy();
  });

  it('should has .car-item', () => {
    carBankService = fixture.debugElement.injector.get(CarsBankService);
    car = new Car('1dew32fewvds', 'audi', 'a3', 2012, 'Sedan');
    carBankService.pushCar(car);
    fixture.detectChanges();
    expect(listElement.getElementsByClassName('car-item').length).toBeTruthy();
  });

});
