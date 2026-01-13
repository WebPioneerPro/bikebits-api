import { Repository } from 'typeorm';
import { Brand } from '../entities/brand.entity';
export declare class BrandRepository {
    private readonly brandRepository;
    constructor(brandRepository: Repository<Brand>);
    create(brandData: Partial<Brand>): Promise<Brand>;
    findAll(): Promise<Brand[]>;
    findById(id: string): Promise<Brand | null>;
    softDelete(id: string): Promise<boolean>;
}
