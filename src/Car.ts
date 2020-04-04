export interface Car {
  honk(): void;
}

export class CarImpl implements Car {
  public honk() {}
}
