import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotocycleRouter = Router();

MotocycleRouter.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).createMoto(),
);

export default MotocycleRouter;