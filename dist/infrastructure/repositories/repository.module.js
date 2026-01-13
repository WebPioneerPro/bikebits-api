"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../entities/product.entity");
const category_entity_1 = require("../entities/category.entity");
const brand_entity_1 = require("../entities/brand.entity");
const vehicle_entity_1 = require("../entities/vehicle.entity");
const product_repository_1 = require("./product.repository");
const category_repository_1 = require("./category.repository");
const brand_repository_1 = require("./brand.repository");
const vehicle_repository_1 = require("./vehicle.repository");
let RepositoryModule = class RepositoryModule {
};
exports.RepositoryModule = RepositoryModule;
exports.RepositoryModule = RepositoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_entity_1.Product, category_entity_1.Category, brand_entity_1.Brand, vehicle_entity_1.Vehicle])],
        providers: [product_repository_1.ProductRepository, category_repository_1.CategoryRepository, brand_repository_1.BrandRepository, vehicle_repository_1.VehicleRepository],
        exports: [product_repository_1.ProductRepository, category_repository_1.CategoryRepository, brand_repository_1.BrandRepository, vehicle_repository_1.VehicleRepository],
    })
], RepositoryModule);
//# sourceMappingURL=repository.module.js.map