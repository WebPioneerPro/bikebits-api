import { BrandRepository } from '../../infrastructure/repositories/brand.repository';
import { Brand } from '../../infrastructure/entities/brand.entity';
import { BrandResponseDto } from '../../infrastructure/dtos/brands/brand-response.dto';
export declare class BrandsService {
    private readonly brandRepository;
    constructor(brandRepository: BrandRepository);
    create(brandData: Partial<Brand>): Promise<BrandResponseDto>;
    findAll(): Promise<BrandResponseDto[]>;
    findById(id: string): Promise<BrandResponseDto>;
    delete(id: string): Promise<void>;
}
