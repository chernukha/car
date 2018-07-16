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
   * It returns Object for additional form (FormComponent)
   */
  get additional(): Object {
    return {
      vid: this.vid,
      year: this.year
    };
  }

  /**
   * It returns Object for main form (FormComponent)
   */
  get main(): Object {
    return {
      name: this.name,
      model: this.model,
      type: this.type
    };
  }

}
