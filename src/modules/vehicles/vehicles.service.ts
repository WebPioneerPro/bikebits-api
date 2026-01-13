import { Injectable, NotFoundException } from '@nestjs/common';
import { VehicleRepository } from '../../infrastructure/repositories/vehicle.repository';
import { Vehicle } from '../../infrastructure/entities/vehicle.entity';
import { VehicleResponseDto } from '../../infrastructure/dtos/vehicles/vehicle-response.dto';

@Injectable()
export class VehiclesService {
  constructor(private readonly vehicleRepository: VehicleRepository) {}

  async create(vehicleData: Partial<Vehicle>): Promise<VehicleResponseDto> {
    return await this.vehicleRepository.create(vehicleData);
  }

  async findAll(): Promise<VehicleResponseDto[]> {
    return await this.vehicleRepository.findAll();
  }

  async findById(id: string): Promise<VehicleResponseDto> {
    const vehicle = await this.vehicleRepository.findById(id);
    if (!vehicle) {
      throw new NotFoundException(`Vehicle with ID ${id} not found`);
    }
    return vehicle;
  }

  async delete(id: string): Promise<void> {
    const deleted = await this.vehicleRepository.softDelete(id);
    if (!deleted) {
      throw new NotFoundException(`Vehicle with ID ${id} not found`);
    }
  }
}