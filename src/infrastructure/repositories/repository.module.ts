import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Category } from '../entities/category.entity';
import { Brand } from '../entities/brand.entity';
import { Vehicle } from '../entities/vehicle.entity';
import { ProductRepository } from './product.repository';
import { CategoryRepository } from './category.repository';
import { BrandRepository } from './brand.repository';
import { VehicleRepository } from './vehicle.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category, Brand, Vehicle])],
  providers: [ProductRepository, CategoryRepository, BrandRepository, VehicleRepository],
  exports: [ProductRepository, CategoryRepository, BrandRepository, VehicleRepository],
})
export class RepositoryModule {}