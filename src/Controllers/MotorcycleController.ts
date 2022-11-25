import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next:NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async createMoto() {
    try {
      const newMotorcycle = await this.service.createMoto(this.req.body);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllMotos() {
    try {
      const allMotos = await this.service.findAllMotos();
      return this.res.status(200).json(allMotos);
    } catch (error) {
      this.next(error);
    }
  }

  public async findMotoById() {
    try {
      const motorcycle = await this.service.findMotoById(this.req.params.id);
      return this.res.status(200).json(motorcycle);
    } catch (err) {
      this.next(err);
    }
  }
}

export default MotorcycleController;
