import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CarsBankService } from '../cars-bank.service';
import { Car, AdditionalFieldsInterface, MainFieldsInterface } from '../car.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit, OnChanges {

  @Input() carIndex: number | null = null;                 // index of car model: null - form for adding car
  @Output() close = new EventEmitter<boolean>();           // event for closing form
  activeTab = 0;                                           // index of active tab: 0 - main tab, 1 - additional tab
  mainTab: FormGroup;                                      // FormGroup for main form: name, model, type
  additionalTab: FormGroup;                                // FormGroup for main form: vid, year
  readonly carTypes = ['', 'Minivan', 'Sedan', 'Bus'];     // types of car

  constructor(private carBankService: CarsBankService) { }

  ngOnInit() {
    this.mainTab = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z]{2,15}')
      ]),
      'model': new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9a-zA-Z]{1,30}')
      ]),
      'type': new FormControl('', [
        Validators.required
      ])
    });
    this.additionalTab = new FormGroup({
      'vid': new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9a-zA-Z]{10,17}')
      ]),
      'year': new FormControl('', [
        Validators.required,
        Validators.pattern('19[0-9][0-9]|20[0-2][0-9]')
      ]),
    });

    this.initForms();
  }

  ngOnChanges(changes: SimpleChanges) {
    const change: SimpleChange = changes.carIndex;
    if (!change.firstChange && change.currentValue !== change.previousValue) {
      this.initForms();
    }
  }

  /**
   * It adds new car into carBankService and reset forms
   */
  addCar() {
    this.carBankService.pushCar(this.createCarModel());
    this.mainTab.reset();
    this.additionalTab.reset();
  }

  /**
   * It changes active tab
   * @param index index of tab
   */
  changeTab(index: number) {
    this.activeTab = index;
  }

  /**
   * It emits event for closing form
   */
  closeComponent() {
    this.close.emit(true);
  }

  /**
   * It creates car model
   */
  createCarModel(): Car {
    return new Car(
      this.additionalTab.value.vid,
      this.mainTab.value.name,
      this.mainTab.value.model,
      Number(this.additionalTab.value.year),
      this.mainTab.value.type
    );
  }

  /**
   * form initialization with empty car model if index equal null and with existing car if index equal number
   */
  initForms() {
    const car = this.carIndex !== null ? this.carBankService.oneCar(this.carIndex) : new Car();
    this.mainTab.setValue(car.main);
    this.additionalTab.setValue(car.additional);
  }

  /**
   * It updates car model which was changed and emits event for closing form
   */
  saveCar() {
    this.carBankService.changeCar(this.carIndex, this.createCarModel());
    this.close.emit(true);
  }

}


