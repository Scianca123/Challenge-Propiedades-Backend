/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsOptional, IsEnum, IsNumber, IsString, Min } from 'class-validator';

export class FilterBuildingDto {
  @IsOptional()
  @IsEnum(['comprar', 'alquilar'])
  typeOfBusiness?: 'comprar' | 'alquilar';

  @IsOptional()
  @IsEnum(['casa', 'edificio'])
  propertyType?: 'casa' | 'edificio';

  @IsOptional()
  @IsString()
  search?: string; // Se puede usar para buscar en título o ubicación

  @IsOptional()
  @IsNumber()
  numberOfBedrooms?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  minPrice?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  maxPrice?: number;
}
