import { Request, Response, NextFunction } from 'express';
import NotFoundError from '../errors/NotFoundError';
import UnprocessableEntityError from '../errors/UnprocessableEntityError';

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    if (error instanceof NotFoundError) {
      return res.status(404).json({ message: error.message });
    }
    if (error instanceof UnprocessableEntityError) {
      return res.status(422).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
    next();
  }
}

export default ErrorHandler;
