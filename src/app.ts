import express, { Request, Response } from 'express';
import cors from 'cors';
import notFound from './middlewares/notFound';
import globalErrorHandler from './middlewares/globalErrorHandler';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});
app.use(notFound);
app.use(globalErrorHandler);
export default app;
