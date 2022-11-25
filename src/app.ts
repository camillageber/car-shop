import express from 'express';
import CarRouter from './Routes/CarRouter';
import ErrorHandler from './Middlewares/ErrorHandler';
import MotocycleRouter from './Routes/MotorcycleRouter';

const app = express();

app.use(CarRouter);
app.use(MotocycleRouter);
app.use(ErrorHandler.handle);

export default app;
