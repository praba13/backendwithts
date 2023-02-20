import 'dotenv/config';
import morgan from 'morgan';
import express, { NextFunction, Request, Response } from 'express';

import noteRoutes from './routes/noteRoutes';
import userRoutes from './routes/userRoutes';

import createHttpError, { isHttpError } from 'http-errors';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/notes', noteRoutes);
app.use('/api/users', userRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, 'Endpoint not found'));
});

/* eslint-disable @typescript-eslint/no-unused-vars */
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = 'An unknown error occurred';
  //if (error instanceof Error) errorMessage = error.message;
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

export default app;
