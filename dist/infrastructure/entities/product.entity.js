"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const base_entity_1 = require("./base.entity");
let Product = class Product extends base_entity_1.BaseEntity {
};
exports.Product = Product;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the product',
        example: 'Brake Pads',
    }),
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'product_name',
        nullable: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'HSN code for the product',
        example: '87083000',
        required: false,
    }),
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'hsn_code',
        nullable: true,
    }),
    __metadata("design:type", String)
], Product.prototype, "hsnCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Shelf position where the product is located',
        example: 'Rack A - Shelf 3',
        required: false,
    }),
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'shelf_position',
        nullable: true,
    }),
    __metadata("design:type", String)
], Product.prototype, "shelfPosition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'UUID of the product category',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'category_id',
        nullable: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'UUID of the product brand',
        example: '123e4567-e89b-12d3-a456-426614174001',
    }),
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'brand_id',
        nullable: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "brandId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Quantity of the product in stock',
        example: 50,
    }),
    (0, typeorm_1.Column)({
        type: 'int',
        name: 'quantity',
        nullable: false,
        default: 0,
    }),
    __metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Price of the product',
        example: 299.99,
    }),
    (0, typeorm_1.Column)({
        type: 'decimal',
        name: 'price',
        precision: 10,
        scale: 2,
        nullable: false,
    }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of vehicle UUIDs that are compatible with this product',
        example: ['123e4567-e89b-12d3-a456-426614174002', '123e4567-e89b-12d3-a456-426614174003'],
        required: false,
        type: [String],
    }),
    (0, typeorm_1.Column)({
        type: 'uuid',
        name: 'compatible_vehicles',
        array: true,
        nullable: true,
    }),
    __metadata("design:type", Array)
], Product.prototype, "compatibleVehicles", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)('products')
], Product);
//# sourceMappingURL=product.entity.js.map