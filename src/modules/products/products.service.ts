import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../../infrastructure/repositories/product.repository';
import { CategoryRepository } from '../../infrastructure/repositories/category.repository';
import { BrandRepository } from '../../infrastructure/repositories/brand.repository';
import { VehicleRepository } from '../../infrastructure/repositories/vehicle.repository';
import { Product } from '../../infrastructure/entities/product.entity';
import { ProductResponseDto } from '../../infrastructure/dtos/products/product-response.dto';

@Injectable()
export class ProductsService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryRepository: CategoryRepository,
    private readonly brandRepository: BrandRepository,
    private readonly vehicleRepository: VehicleRepository,
  ) {}

  async create(productData: Partial<Product>): Promise<Product> {
    return await this.productRepository.create(productData);
  }

  async findAll(): Promise<ProductResponseDto[]> {
    const products = await this.productRepository.findAll();
    
    const productsWithNames = await Promise.all(
      products.map(async (product) => {
        const [category, brand, vehicles] = await Promise.all([
          this.categoryRepository.findById(product.categoryId),
          this.brandRepository.findById(product.brandId),
          product.compatibleVehicles && product.compatibleVehicles.length > 0
            ? this.vehicleRepository.findByIds(product.compatibleVehicles)
            : Promise.resolve([]),
        ]);
        
        return {
          ...product,
          categoryName: category?.categoryName || 'Unknown Category',
          brandName: brand?.brandName || 'Unknown Brand',
          compatibleVehicleNames: vehicles.map(vehicle => vehicle.vehicleName),
        };
      })
    );

    return productsWithNames;
  }

  async findById(id: string): Promise<ProductResponseDto> {
    const product = await this.productRepository.findById(id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    const [category, brand, vehicles] = await Promise.all([
      this.categoryRepository.findById(product.categoryId),
      this.brandRepository.findById(product.brandId),
      product.compatibleVehicles && product.compatibleVehicles.length > 0
        ? this.vehicleRepository.findByIds(product.compatibleVehicles)
        : Promise.resolve([]),
    ]);
    
    return {
      ...product,
      categoryName: category?.categoryName || 'Unknown Category',
      brandName: brand?.brandName || 'Unknown Brand',
      compatibleVehicleNames: vehicles.map(vehicle => vehicle.vehicleName),
    };
  }

  async update(id: string, updateData: Partial<Product>): Promise<ProductResponseDto> {
    const product = await this.productRepository.update(id, updateData);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    const [category, brand, vehicles] = await Promise.all([
      this.categoryRepository.findById(product.categoryId),
      this.brandRepository.findById(product.brandId),
      product.compatibleVehicles && product.compatibleVehicles.length > 0
        ? this.vehicleRepository.findByIds(product.compatibleVehicles)
        : Promise.resolve([]),
    ]);
    
    return {
      ...product,
      categoryName: category?.categoryName || 'Unknown Category',
      brandName: brand?.brandName || 'Unknown Brand',
      compatibleVehicleNames: vehicles.map(vehicle => vehicle.vehicleName),
    };
  }

  async delete(id: string): Promise<void> {
    const deleted = await this.productRepository.softDelete(id);
    if (!deleted) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }
}