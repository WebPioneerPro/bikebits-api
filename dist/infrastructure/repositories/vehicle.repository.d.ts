import { Repository } from 'typeorm';
import { Vehicle } from '../entities/vehicle.entity';
export declare class VehicleRepository {
    private readonly vehicleRepository;
    constructor(vehicleRepository: Repository<Vehicle>);
    create(vehicleData: Partial<Vehicle>): Promise<Vehicle>;
    findAll(): Promise<Vehicle[]>;
    findById(id: string): Promise<Vehicle | null>;
    findByIds(ids: string[]): Promise<Vehicle[]>;
    softDelete(id: string): Promise<boolean>;
}
