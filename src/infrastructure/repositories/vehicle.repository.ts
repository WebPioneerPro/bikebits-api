import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Vehicle } from '../entities/vehicle.entity';

@Injectable()
export class VehicleRepository {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {}

  async create(vehicleData: Partial<Vehicle>): Promise<Vehicle> {
    const vehicle = this.vehicleRepository.create({
      ...vehicleData,
      isActive: true,
    });
    return await this.vehicleRepository.save(vehicle);
  }

  async findAll(): Promise<Vehicle[]> {
    return await this.vehicleRepository.find({
      where: { isActive: true },
      order: { vehicleName: 'ASC' },
    });
  }

  async findById(id: string): Promise<Vehicle | null> {
    return await this.vehicleRepository.findOne({
      where: { id, isActive: true },
    });
  }

  async findByIds(ids: string[]): Promise<Vehicle[]> {
    if (!ids || ids.length === 0) {
      return [];
    }
    return await this.vehicleRepository.find({
      where: { id: In(ids), isActive: true },
      order: { vehicleName: 'ASC' },
    });
  }

  async softDelete(id: string): Promise<boolean> {
    const result = await this.vehicleRepository.update(
      { id, isActive: true },
      { isActive: false, updatedOn: new Date() }
    );

    return result.affected > 0;
  }
}