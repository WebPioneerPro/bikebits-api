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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_repository_1 = require("../../infrastructure/repositories/product.repository");
const category_repository_1 = require("../../infrastructure/repositories/category.repository");
const brand_repository_1 = require("../../infrastructure/repositories/brand.repository");
const vehicle_repository_1 = require("../../infrastructure/repositories/vehicle.repository");
let ProductsService = class ProductsService {
    constructor(productRepository, categoryRepository, brandRepository, vehicleRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.brandRepository = brandRepository;
        this.vehicleRepository = vehicleRepository;
    }
    async create(productData) {
        return await this.productRepository.create(productData);
    }
    async findAll() {
        const products = await this.productRepository.findAll();
        const productsWithNames = await Promise.all(products.map(async (product) => {
            const [category, brand, vehicles] = await Promise.all([
                this.categoryRepository.findById(product.categoryId),
                this.brandRepository.findById(product.brandId),
                product.compatibleVehicles && product.compatibleVehicles.length > 0
                    ? this.vehicleRepository.findByIds(product.compatibleVehicles)
                    : Promise.resolve([]),
            ]);
            return {
                ...product,
                categoryName: category?.categoryName || 'Unknown Category',
                brandName: brand?.brandName || 'Unknown Brand',
                compatibleVehicleNames: vehicles.map(vehicle => vehicle.vehicleName),
            };
        }));
        return productsWithNames;
    }
    async findById(id) {
        const product = await this.productRepository.findById(id);
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        const [category, brand, vehicles] = await Promise.all([
            this.categoryRepository.findById(product.categoryId),
            this.brandRepository.findById(product.brandId),
            product.compatibleVehicles && product.compatibleVehicles.length > 0
                ? this.vehicleRepository.findByIds(product.compatibleVehicles)
                : Promise.resolve([]),
        ]);
        return {
            ...product,
            categoryName: category?.categoryName || 'Unknown Category',
            brandName: brand?.brandName || 'Unknown Brand',
            compatibleVehicleNames: vehicles.map(vehicle => vehicle.vehicleName),
        };
    }
    async update(id, updateData) {
        const product = await this.productRepository.update(id, updateData);
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        const [category, brand, vehicles] = await Promise.all([
            this.categoryRepository.findById(product.categoryId),
            this.brandRepository.findById(product.brandId),
            product.compatibleVehicles && product.compatibleVehicles.length > 0
                ? this.vehicleRepository.findByIds(product.compatibleVehicles)
                : Promise.resolve([]),
        ]);
        return {
            ...product,
            categoryName: category?.categoryName || 'Unknown Category',
            brandName: brand?.brandName || 'Unknown Brand',
            compatibleVehicleNames: vehicles.map(vehicle => vehicle.vehicleName),
        };
    }
    async delete(id) {
        const deleted = await this.productRepository.softDelete(id);
        if (!deleted) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository,
        category_repository_1.CategoryRepository,
        brand_repository_1.BrandRepository,
        vehicle_repository_1.VehicleRepository])
], ProductsService);
//# sourceMappingURL=products.service.js.map