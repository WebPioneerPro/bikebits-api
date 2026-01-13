import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
export declare class ProductRepository {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    create(productData: Partial<Product>): Promise<Product>;
    findAll(): Promise<Product[]>;
    findById(id: string): Promise<Product | null>;
    update(id: string, updateData: Partial<Product>): Promise<Product | null>;
    softDelete(id: string): Promise<boolean>;
}
