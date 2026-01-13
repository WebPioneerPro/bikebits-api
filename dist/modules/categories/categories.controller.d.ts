import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from '../../infrastructure/dtos/categories/create-category.dto';
import { CategoryResponseDto } from '../../infrastructure/dtos/categories/category-response.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(categoryData: CreateCategoryDto): Promise<CategoryResponseDto>;
    findAll(): Promise<CategoryResponseDto[]>;
    findById(id: string): Promise<CategoryResponseDto>;
    delete(id: string): Promise<void>;
}
