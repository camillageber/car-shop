import express from 'express';
import CarController from '../Controllers/CarController';

const CarRouter = express.Router();

CarRouter.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).createCar(),
);

export default CarRouter;