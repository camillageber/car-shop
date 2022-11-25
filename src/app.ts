import express from 'express';
import CarRouter from './Routes/CarRouter';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();

app.use(CarRouter);
app.use(ErrorHandler.handle);

export default app;
