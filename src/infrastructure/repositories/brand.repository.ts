import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandRepository {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  async create(brandData: Partial<Brand>): Promise<Brand> {
    const brand = this.brandRepository.create({
      ...brandData,
      isActive: true,
    });
    return await this.brandRepository.save(brand);
  }

  async findAll(): Promise<Brand[]> {
    return await this.brandRepository.find({
      where: { isActive: true },
      order: { brandName: 'ASC' },
    });
  }

  async findById(id: string): Promise<Brand | null> {
    return await this.brandRepository.findOne({
      where: { id, isActive: true },
    });
  }

  async softDelete(id: string): Promise<boolean> {
    const result = await this.brandRepository.update(
      { id, isActive: true },
      { isActive: false, updatedOn: new Date() }
    );

    return result.affected > 0;
  }
}