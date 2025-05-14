/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilterBuildingDto } from '../dtos/filter-building.dto';
import { Injectable } from '@nestjs/common';
import { Building } from '../entitys/buildingEntity';

@Injectable()
export class BuildingService {
  constructor(
    @InjectRepository(Building)
    private readonly buildingRepository: Repository<Building>,
  ) {}

  async getFilteredBuildings(filters: FilterBuildingDto): Promise<Building[]> {
    const {
      typeOfBusiness,
      propertyType,
      search,
      numberOfBedrooms,
      minPrice,
      maxPrice,
    } = filters;

    const query = this.buildingRepository.createQueryBuilder('building');

    if (typeOfBusiness) {
      query.andWhere('building.typeOfBusiness = :typeOfBusiness', {
        typeOfBusiness,
      });
    }

    if (propertyType) {
      query.andWhere('building.propertyType = :propertyType', { propertyType });
    }

    if (numberOfBedrooms) {
      query.andWhere('building.numberOfBedrooms = :numberOfBedrooms', {
        numberOfBedrooms,
      });
    }

    if (minPrice !== undefined) {
      query.andWhere('building.price >= :minPrice', { minPrice });
    }

    if (maxPrice !== undefined) {
      query.andWhere('building.price <= :maxPrice', { maxPrice });
    }

    if (search) {
      query.andWhere(
        '(LOWER(building.titulo) LIKE LOWER(:search) OR LOWER(building.location) LIKE LOWER(:search))',
        { search: `%${search}%` },
      );
    }

    return await query.getMany();
  }
}
