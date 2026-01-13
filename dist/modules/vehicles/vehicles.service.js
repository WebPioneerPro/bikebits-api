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
exports.VehiclesService = void 0;
const common_1 = require("@nestjs/common");
const vehicle_repository_1 = require("../../infrastructure/repositories/vehicle.repository");
let VehiclesService = class VehiclesService {
    constructor(vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }
    async create(vehicleData) {
        return await this.vehicleRepository.create(vehicleData);
    }
    async findAll() {
        return await this.vehicleRepository.findAll();
    }
    async findById(id) {
        const vehicle = await this.vehicleRepository.findById(id);
        if (!vehicle) {
            throw new common_1.NotFoundException(`Vehicle with ID ${id} not found`);
        }
        return vehicle;
    }
    async delete(id) {
        const deleted = await this.vehicleRepository.softDelete(id);
        if (!deleted) {
            throw new common_1.NotFoundException(`Vehicle with ID ${id} not found`);
        }
    }
};
exports.VehiclesService = VehiclesService;
exports.VehiclesService = VehiclesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [vehicle_repository_1.VehicleRepository])
], VehiclesService);
//# sourceMappingURL=vehicles.service.js.map