export class Car {
  vid: string;
  name: string;
  model: string;
  year: number | null;
  type: string;

  constructor(vid: string = '', name: string = '', model: string = '', year: number = null, type: string = '') {
    this.vid = vid.toLocaleUpperCase();
    this.name = name;
    this.model = model;
    this.year = year;
    this.type = type;
  }

  /**
   * It returns AdditionalFieldsInterface for additional form (FormComponent)
   */
  get additional(): AdditionalFieldsInterface {
    return {
      vid: this.vid,
      year: this.year
    };
  }

  /**
   * It returns MainFieldsInterface for main form (FormComponent)
   */
  get main(): MainFieldsInterface {
    return {
      name: this.name,
      model: this.model,
      type: this.type
    };
  }

}

export interface AdditionalFieldsInterface {
  vid: string;
  year: number | null;
}

export interface MainFieldsInterface {
  name: string;
  model: string;
  type: string;
}
