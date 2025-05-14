import { Module } from '@nestjs/common';
import { BuildingService } from './building.service';
import { BuildingController } from './building.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Building } from './buildingEntity';

@Module({
  imports: [TypeOrmModule.forFeature([Building])],
  providers: [BuildingService],
  controllers: [BuildingController],
})
export class BuildingModule {}
