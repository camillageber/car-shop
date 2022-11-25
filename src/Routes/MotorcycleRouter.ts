import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorcycleRouter = Router();

MotorcycleRouter.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).createMoto(),
);

MotorcycleRouter.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).findMotoById(),
);

MotorcycleRouter.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).findAllMotos(),
);

MotorcycleRouter.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateMoto(),
);

export default MotorcycleRouter;