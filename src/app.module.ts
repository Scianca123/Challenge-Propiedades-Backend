import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { BuildingModule } from './modules/building/building.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db', // Este nombre va a coincidir con el servicio de docker-compose
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest_db',
      autoLoadEntities: true,
      synchronize: true, // Solo para desarrollo. Crea las tablas automáticamente.
    }),
    UserModule,
    BuildingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
