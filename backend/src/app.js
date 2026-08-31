import cors from 'cors';
import express from 'express';
import conversionRouter from './routes/conversions.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});

app.use('/api/convert', conversionRouter);

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({ error: 'Une erreur interne est survenue.' });
});

export default app;
