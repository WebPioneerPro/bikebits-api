import { BaseEntity } from './base.entity';
export declare class Product extends BaseEntity {
    productName: string;
    hsnCode: string;
    shelfPosition: string;
    categoryId: string;
    brandId: string;
    quantity: number;
    price: number;
    compatibleVehicles: string[];
}
