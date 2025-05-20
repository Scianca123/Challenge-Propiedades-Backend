import { Controller, Get, Query } from '@nestjs/common';
import { FilterBuildingDto } from '../dtos/filter-building.dto';
import { BuildingService } from '../services/building.service';

@Controller('building')
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) {}

  @Get()
  async getFilteredBuildings(@Query() filters: FilterBuildingDto) {
    const buildings = await this.buildingService.getFilteredBuildings(filters);
    return { buildings };
  }
}
