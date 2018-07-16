import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  formDisplayStatus = false;        // status of visibility of form: true - show, false - hide
  chosenCar: number | null = null;  // index of car model: null - form for adding car

  constructor() { }

  /**
   * It transmits index into form and shows form
   * @param index index of car model
   */
  editCar(index: number) {
    this.formDisplayStatus = true;
    this.chosenCar = index;
  }

  /**
   * It changes visibility of form
   * @param status status of visibility of form: true - show, false - hide
   */
  formDisplay(status: boolean) {
    if (this.formDisplayStatus !== status) {
      this.formDisplayStatus = status;
      this.chosenCar = null;
    }
  }

}
