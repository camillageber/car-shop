import { NextFunction, Request, Response } from 'express';
// import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async createCar() {
    const newCar = await this.service.createCar(this.req.body);
    return this.res.status(201).json(newCar);
  }

  public async findAllCars() {
    const allCars = await this.service.findAllCars();
    return this.res.status(200).json(allCars);
  }

  public async findCarById() {
    try {
      const car = await this.service.findCarById(this.req.params.id);
      return this.res.status(200).json(car);
    } catch (err) {
      this.next(err);
    }
  }

  public async updateCar() {
    try {
      const updated = await this.service.updateCar(this.req.params.id, this.req.body);
      return this.res.status(200).json(updated);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;
