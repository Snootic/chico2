
import express, { type Request, type Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerAutogen from 'swagger-autogen';
import fs from 'fs';
import path from 'path';
import { doc, outputFile, routesEndpoints } from './swagger';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './routes';
import { connectDB } from './mongodb';
import api from './api';

const app = express();
dotenv.config();

const swaggerJsonPath = outputFile;

function startServer() {
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  const swaggerDocument = JSON.parse(fs.readFileSync(swaggerJsonPath, 'utf-8'));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.use(routes);

  app.get('/', (_req: Request, res: Response) => {
    res.redirect('/api-docs');
  });

  connectDB().then(async () => {
    app.listen(api.port, () => {
      console.log(`server started at ${api.url}`);
    });
  }).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });
}

swaggerAutogen({openapi: '3.0.0'})(outputFile, routesEndpoints, doc).then(() => {
  console.log('Swagger gerado com sucesso!');
  startServer();
});
