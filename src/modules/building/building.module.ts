import { Module } from '@nestjs/common';
import { BuildingService } from './services/building.service';
import { BuildingController } from './controllers/building.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Building } from './entitys/buildingEntity';

@Module({
  imports: [TypeOrmModule.forFeature([Building])],
  providers: [BuildingService],
  controllers: [BuildingController],
})
export class BuildingModule {}
