import { CreateProductDto } from './create-product.dto';
declare const UpdateProductDto_base: import("@nestjs/common").Type<Partial<CreateProductDto>>;
export declare class UpdateProductDto extends UpdateProductDto_base {
    productName?: string;
    hsnCode?: string;
    shelfPosition?: string;
    categoryId?: string;
    brandId?: string;
    quantity?: number;
    price?: number;
    compatibleVehicles?: string[];
}
export {};
