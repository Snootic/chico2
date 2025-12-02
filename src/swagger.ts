import m2s from 'mongoose-to-swagger';
import mongoose from 'mongoose';
import { AuthorSchema, BookSchema, LoanSchema, UserSchema } from './models';
import path from 'path';
import api from './api';

const defaultDefinitionsOptions = {
  omitMongooseInternals: true, 
};

const simplifySchema = (schema: any, isRoot: boolean): any => {
  if (schema.type && schema.type !== 'object' && schema.type !== 'array') {
    return schema.example || schema.type;
  }
  if (schema.properties) {
    const obj: any = {};
    Object.keys(schema.properties).forEach(key => {
      if (isRoot && key === '_id') {
        return; 
      }
      obj[key] = simplifySchema(schema.properties[key], false);
    });
    return obj;
  }

  if (schema.type === 'array' && schema.items) {
    return [simplifySchema(schema.items, false)];
  }

  return "unknown";
};

const rawDefinitions = {
  User: m2s(mongoose.model('User', UserSchema), defaultDefinitionsOptions),
  Book: m2s(mongoose.model('Book', BookSchema), defaultDefinitionsOptions),
  Author: m2s(mongoose.model('Author', AuthorSchema), defaultDefinitionsOptions),
  Loan: m2s(mongoose.model('Loan', LoanSchema), defaultDefinitionsOptions),
};

const definitions = Object.keys(rawDefinitions).reduce((acc: any, key) => {
  const schema = rawDefinitions[key];
  
  const cleanObject = simplifySchema(schema, true);

  acc[key] = cleanObject;
  return acc;
}, {});

const doc = {
  info: {
    title: 'API Chico',
    description: 'Gerado automaticamente pelo swagger-autogen',
  },
  components: {
    schemas: definitions
  },
  servers: [
    {
      url: api.url,
      description: 'API P2 Chico'
    },
  ]
};

const outputFile = path.resolve(__dirname, './swagger-output.json');
const routesEndpoints = [path.join(__dirname, './routes/*.{ts,js}')];

export { doc, outputFile, routesEndpoints };
