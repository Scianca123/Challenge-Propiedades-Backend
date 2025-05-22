/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from 'src/modules/user/entitys/userEntity';
import { Building } from 'src/modules/building/entitys/buildingEntity';

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const isProduction = process.env.NODE_ENV === 'production';

const common: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [User, Building],
  logging: true,
  synchronize: true,
  ssl: isProduction, 
  extra: isProduction ? {
    ssl: {
      rejectUnauthorized: false, 
    },
  } : undefined,
};

export default {
  ...common,
  migrationsRun: isProduction,
} as DataSourceOptions;
