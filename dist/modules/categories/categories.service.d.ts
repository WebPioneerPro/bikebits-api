import { CategoryRepository } from '../../infrastructure/repositories/category.repository';
import { Category } from '../../infrastructure/entities/category.entity';
import { CategoryResponseDto } from '../../infrastructure/dtos/categories/category-response.dto';
export declare class CategoriesService {
    private readonly categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    create(categoryData: Partial<Category>): Promise<CategoryResponseDto>;
    findAll(): Promise<CategoryResponseDto[]>;
    findById(id: string): Promise<CategoryResponseDto>;
    delete(id: string): Promise<void>;
}
