import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import noteRoutes from './routes/noteRoutes';

const app = express();
app.use(express.json());
app.use('/api/notes', noteRoutes);

app.use((req, res, next) => {
  next('Endpoint not found');
});

/* eslint-disable @typescript-eslint/no-unused-vars */
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = 'An unknown error occurred';
  if (error instanceof Error) errorMessage = error.message;
  res.status(500).json({ error: errorMessage });
});

export default app;
