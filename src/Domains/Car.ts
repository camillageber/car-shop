import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    {
      id,
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty,
    }: ICar,
  ) {
    super({ id, model, year, color, status, buyValue });
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  getDoorsQty(): number {
    return this.doorsQty;
  }

  setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  getSeatsQty(): number {
    return this.seatsQty;
  }

  setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }
}