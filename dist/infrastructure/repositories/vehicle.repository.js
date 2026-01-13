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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const vehicle_entity_1 = require("../entities/vehicle.entity");
let VehicleRepository = class VehicleRepository {
    constructor(vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }
    async create(vehicleData) {
        const vehicle = this.vehicleRepository.create({
            ...vehicleData,
            isActive: true,
        });
        return await this.vehicleRepository.save(vehicle);
    }
    async findAll() {
        return await this.vehicleRepository.find({
            where: { isActive: true },
            order: { vehicleName: 'ASC' },
        });
    }
    async findById(id) {
        return await this.vehicleRepository.findOne({
            where: { id, isActive: true },
        });
    }
    async findByIds(ids) {
        if (!ids || ids.length === 0) {
            return [];
        }
        return await this.vehicleRepository.find({
            where: { id: (0, typeorm_2.In)(ids), isActive: true },
            order: { vehicleName: 'ASC' },
        });
    }
    async softDelete(id) {
        const result = await this.vehicleRepository.update({ id, isActive: true }, { isActive: false, updatedOn: new Date() });
        return result.affected > 0;
    }
};
exports.VehicleRepository = VehicleRepository;
exports.VehicleRepository = VehicleRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vehicle_entity_1.Vehicle)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VehicleRepository);
//# sourceMappingURL=vehicle.repository.js.map