import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
export declare class CategoryRepository {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    create(categoryData: Partial<Category>): Promise<Category>;
    findAll(): Promise<Category[]>;
    findById(id: string): Promise<Category | null>;
    softDelete(id: string): Promise<boolean>;
}
