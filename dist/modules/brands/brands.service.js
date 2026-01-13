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
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const brand_repository_1 = require("../../infrastructure/repositories/brand.repository");
let BrandsService = class BrandsService {
    constructor(brandRepository) {
        this.brandRepository = brandRepository;
    }
    async create(brandData) {
        return await this.brandRepository.create(brandData);
    }
    async findAll() {
        return await this.brandRepository.findAll();
    }
    async findById(id) {
        const brand = await this.brandRepository.findById(id);
        if (!brand) {
            throw new common_1.NotFoundException(`Brand with ID ${id} not found`);
        }
        return brand;
    }
    async delete(id) {
        const deleted = await this.brandRepository.softDelete(id);
        if (!deleted) {
            throw new common_1.NotFoundException(`Brand with ID ${id} not found`);
        }
    }
};
exports.BrandsService = BrandsService;
exports.BrandsService = BrandsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [brand_repository_1.BrandRepository])
], BrandsService);
//# sourceMappingURL=brands.service.js.map