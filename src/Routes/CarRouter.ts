import express from 'express';
import CarController from '../Controllers/CarController';

const CarRouter = express.Router();

CarRouter.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).createCar(),
);

CarRouter.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).findCarById(),
);

CarRouter.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).findAllCars(),
);

export default CarRouter;