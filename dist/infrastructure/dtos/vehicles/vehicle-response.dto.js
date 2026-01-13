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
exports.VehicleResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class VehicleResponseDto {
}
exports.VehicleResponseDto = VehicleResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Vehicle UUID',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    __metadata("design:type", String)
], VehicleResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the vehicle',
        example: 'Honda CBR 600RR',
    }),
    __metadata("design:type", String)
], VehicleResponseDto.prototype, "vehicleName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Creation timestamp',
        example: '2024-01-13T15:30:00Z',
    }),
    __metadata("design:type", Date)
], VehicleResponseDto.prototype, "createdOn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Last update timestamp',
        example: '2024-01-13T15:30:00Z',
    }),
    __metadata("design:type", Date)
], VehicleResponseDto.prototype, "updatedOn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Active status',
        example: true,
    }),
    __metadata("design:type", Boolean)
], VehicleResponseDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'UUID of user who created the vehicle',
        example: '123e4567-e89b-12d3-a456-426614174004',
        required: false,
    }),
    __metadata("design:type", String)
], VehicleResponseDto.prototype, "createdBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'UUID of user who last updated the vehicle',
        example: '123e4567-e89b-12d3-a456-426614174005',
        required: false,
    }),
    __metadata("design:type", String)
], VehicleResponseDto.prototype, "updatedBy", void 0);
//# sourceMappingURL=vehicle-response.dto.js.map