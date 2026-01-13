import { ProductRepository } from '../../infrastructure/repositories/product.repository';
import { CategoryRepository } from '../../infrastructure/repositories/category.repository';
import { BrandRepository } from '../../infrastructure/repositories/brand.repository';
import { VehicleRepository } from '../../infrastructure/repositories/vehicle.repository';
import { Product } from '../../infrastructure/entities/product.entity';
import { ProductResponseDto } from '../../infrastructure/dtos/products/product-response.dto';
export declare class ProductsService {
    private readonly productRepository;
    private readonly categoryRepository;
    private readonly brandRepository;
    private readonly vehicleRepository;
    constructor(productRepository: ProductRepository, categoryRepository: CategoryRepository, brandRepository: BrandRepository, vehicleRepository: VehicleRepository);
    create(productData: Partial<Product>): Promise<Product>;
    findAll(): Promise<ProductResponseDto[]>;
    findById(id: string): Promise<ProductResponseDto>;
    update(id: string, updateData: Partial<Product>): Promise<ProductResponseDto>;
    delete(id: string): Promise<void>;
}
