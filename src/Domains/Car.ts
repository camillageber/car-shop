import ICar from '../Interfaces/ICar';

class Car {
  private id: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private status: boolean;
  private buyValue: number;
  private doorsQty: number;
  private seatQty: number;

  constructor({id, model, year, color, status, buyValue, doorsQty, seatQty}: ICar) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status || false;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatQty = seatQty;
  }

  public getId() {
    return this.id;
  }

  public getModel() {
    return this.model;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getYear() {
    return this.year;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getColor() {
    return this.color;    
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getStatus() {
    return this.status;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  public getSeatQty() {
    return this.seatQty;
  }

  public setSeatQty(seatQty: number) {
    this.seatQty = seatQty;
  }

}

export default Car;
