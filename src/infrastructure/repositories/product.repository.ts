import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(productData: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create({
      ...productData,
      isActive: true,
    });
    return await this.productRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find({
      where: { isActive: true },
      order: { createdOn: 'DESC' },
    });
  }

  async findById(id: string): Promise<Product | null> {
    return await this.productRepository.findOne({
      where: { id, isActive: true },
    });
  }

//   async findByCategory(categoryId: string): Promise<Product[]> {
//     return await this.productRepository.find({
//       where: { categoryId, isActive: true },
//       order: { productName: 'ASC' },
//     });
//   }

//   async findByBrand(brandId: string): Promise<Product[]> {
//     return await this.productRepository.find({
//       where: { brandId, isActive: true },
//       order: { productName: 'ASC' },
//     });
//   }

  async update(id: string, updateData: Partial<Product>): Promise<Product | null> {
    const product = await this.findById(id);
    if (!product) {
      return null;
    }

    await this.productRepository.update(
      { id, isActive: true },
      { ...updateData, updatedOn: new Date() }
    );

    return await this.findById(id);
  }

  async softDelete(id: string): Promise<boolean> {
    const result = await this.productRepository.update(
      { id, isActive: true },
      { isActive: false, updatedOn: new Date() }
    );

    return result.affected > 0;
  }

//   async findWithPagination(
//     page: number = 1,
//     limit: number = 10,
//   ): Promise<{ products: Product[]; total: number; totalPages: number }> {
//     const [products, total] = await this.productRepository.findAndCount({
//       where: { isActive: true },
//       order: { createdOn: 'DESC' },
//       skip: (page - 1) * limit,
//       take: limit,
//     });

//     return {
//       products,
//       total,
//       totalPages: Math.ceil(total / limit),
//     };
//   }

//   async searchByName(searchTerm: string): Promise<Product[]> {
//     return await this.productRepository
//       .createQueryBuilder('product')
//       .where('product.isActive = :isActive', { isActive: true })
//       .andWhere('LOWER(product.productName) LIKE LOWER(:searchTerm)', {
//         searchTerm: `%${searchTerm}%`,
//       })
//       .orderBy('product.productName', 'ASC')
//       .getMany();
//   }

//   async findByVehicleCompatibility(vehicleId: string): Promise<Product[]> {
//     return await this.productRepository
//       .createQueryBuilder('product')
//       .where('product.isActive = :isActive', { isActive: true })
//       .andWhere(':vehicleId = ANY(product.compatibleVehicles)', { vehicleId })
//       .orderBy('product.productName', 'ASC')
//       .getMany();
//   }
}