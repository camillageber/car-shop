import express from 'express';
import CarRouter from './Routes/CarRouter';
import ErrorHandler from './Middlewares/ErrorHandler';
import MotorcycleRouter from './Routes/MotorcycleRouter';

const app = express();
app.use(express.json());

app.use(CarRouter);
app.use(MotorcycleRouter);
app.use(ErrorHandler.handle);

export default app;
