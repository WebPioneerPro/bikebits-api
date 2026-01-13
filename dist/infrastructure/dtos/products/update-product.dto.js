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
exports.UpdateProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_product_dto_1 = require("./create-product.dto");
class UpdateProductDto extends (0, swagger_1.PartialType)(create_product_dto_1.CreateProductDto) {
}
exports.UpdateProductDto = UpdateProductDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the product',
        example: 'Brake Pads',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "productName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'HSN code for the product',
        example: '87083000',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "hsnCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Shelf position where the product is located',
        example: 'Rack A - Shelf 3',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "shelfPosition", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'UUID of the product category',
        example: '123e4567-e89b-12d3-a456-426614174000',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'UUID of the product brand',
        example: '123e4567-e89b-12d3-a456-426614174001',
        required: false,
    }),
    __metadata("design:type", String)
], UpdateProductDto.prototype, "brandId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Quantity of the product in stock',
        example: 50,
        minimum: 0,
        required: false,
    }),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Price of the product',
        example: 299.99,
        minimum: 0,
        required: false,
    }),
    __metadata("design:type", Number)
], UpdateProductDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Array of vehicle UUIDs that are compatible with this product',
        example: ['123e4567-e89b-12d3-a456-426614174002', '123e4567-e89b-12d3-a456-426614174003'],
        required: false,
        type: [String],
    }),
    __metadata("design:type", Array)
], UpdateProductDto.prototype, "compatibleVehicles", void 0);
//# sourceMappingURL=update-product.dto.js.map