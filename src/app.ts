import express, { Request, Response } from 'express';
import cors from 'cors';
import notFound from './middlewares/notFound';
import globalErrorHandler from './middlewares/globalErrorHandler';
import router from './router';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ['http://localhost:3000', 'https://bike-info360-tka.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

app.use(notFound);
app.use(globalErrorHandler);
export default app;
