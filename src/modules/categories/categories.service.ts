import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryRepository } from '../../infrastructure/repositories/category.repository';
import { Category } from '../../infrastructure/entities/category.entity';
import { CategoryResponseDto } from '../../infrastructure/dtos/categories/category-response.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async create(categoryData: Partial<Category>): Promise<CategoryResponseDto> {
    return await this.categoryRepository.create(categoryData);
  }

  async findAll(): Promise<CategoryResponseDto[]> {
    return await this.categoryRepository.findAll();
  }

  async findById(id: string): Promise<CategoryResponseDto> {
    const category = await this.categoryRepository.findById(id);
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return category;
  }

  async delete(id: string): Promise<void> {
    const deleted = await this.categoryRepository.softDelete(id);
    if (!deleted) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
  }
}