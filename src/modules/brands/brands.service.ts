import { Injectable, NotFoundException } from '@nestjs/common';
import { BrandRepository } from '../../infrastructure/repositories/brand.repository';
import { Brand } from '../../infrastructure/entities/brand.entity';
import { BrandResponseDto } from '../../infrastructure/dtos/brands/brand-response.dto';

@Injectable()
export class BrandsService {
  constructor(private readonly brandRepository: BrandRepository) {}

  async create(brandData: Partial<Brand>): Promise<BrandResponseDto> {
    return await this.brandRepository.create(brandData);
  }

  async findAll(): Promise<BrandResponseDto[]> {
    return await this.brandRepository.findAll();
  }

  async findById(id: string): Promise<BrandResponseDto> {
    const brand = await this.brandRepository.findById(id);
    if (!brand) {
      throw new NotFoundException(`Brand with ID ${id} not found`);
    }
    return brand;
  }

  async delete(id: string): Promise<void> {
    const deleted = await this.brandRepository.softDelete(id);
    if (!deleted) {
      throw new NotFoundException(`Brand with ID ${id} not found`);
    }
  }
}