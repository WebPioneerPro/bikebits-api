import { ProductsService } from './products.service';
import { Product } from '../../infrastructure/entities/product.entity';
import { CreateProductDto } from '../../infrastructure/dtos/products/create-product.dto';
import { UpdateProductDto } from '../../infrastructure/dtos/products/update-product.dto';
import { ProductResponseDto } from '../../infrastructure/dtos/products/product-response.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(productData: CreateProductDto): Promise<Product>;
    findAll(): Promise<ProductResponseDto[]>;
    findById(id: string): Promise<ProductResponseDto>;
    update(id: string, updateData: UpdateProductDto): Promise<ProductResponseDto>;
    delete(id: string): Promise<void>;
}
