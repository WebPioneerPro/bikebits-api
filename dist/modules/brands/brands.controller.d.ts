import { BrandsService } from './brands.service';
import { CreateBrandDto } from '../../infrastructure/dtos/brands/create-brand.dto';
import { BrandResponseDto } from '../../infrastructure/dtos/brands/brand-response.dto';
export declare class BrandsController {
    private readonly brandsService;
    constructor(brandsService: BrandsService);
    create(brandData: CreateBrandDto): Promise<BrandResponseDto>;
    findAll(): Promise<BrandResponseDto[]>;
    findById(id: string): Promise<BrandResponseDto>;
    delete(id: string): Promise<void>;
}
