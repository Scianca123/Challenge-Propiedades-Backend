import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from 'src/modules/user/entitys/userEntity';
import { Building } from 'src/modules/building/entitys/buildingEntity';

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const common: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [User, Building],
  logging: true,
  synchronize: process.env.NODE_ENV === 'development',
};

export default {
  ...common,
  synchronize: process.env.NODE_ENV === 'development',
  migrationsRun: process.env.NODE_ENV !== 'development',
} as DataSourceOptions;
