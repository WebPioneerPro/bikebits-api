import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(categoryData: Partial<Category>): Promise<Category> {
    const category = this.categoryRepository.create({
      ...categoryData,
      isActive: true,
    });
    return await this.categoryRepository.save(category);
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find({
      where: { isActive: true },
      order: { categoryName: 'ASC' },
    });
  }

  async findById(id: string): Promise<Category | null> {
    return await this.categoryRepository.findOne({
      where: { id, isActive: true },
    });
  }

//   async update(id: string, updateData: Partial<Category>): Promise<Category | null> {
//     const category = await this.findById(id);
//     if (!category) {
//       return null;
//     }

//     await this.categoryRepository.update(
//       { id, isActive: true },
//       { ...updateData, updatedOn: new Date() }
//     );

//     return await this.findById(id);
//   }

  async softDelete(id: string): Promise<boolean> {
    const result = await this.categoryRepository.update(
      { id, isActive: true },
      { isActive: false, updatedOn: new Date() }
    );

    return result.affected > 0;
  }
}