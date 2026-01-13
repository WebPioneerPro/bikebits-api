import { VehicleRepository } from '../../infrastructure/repositories/vehicle.repository';
import { Vehicle } from '../../infrastructure/entities/vehicle.entity';
import { VehicleResponseDto } from '../../infrastructure/dtos/vehicles/vehicle-response.dto';
export declare class VehiclesService {
    private readonly vehicleRepository;
    constructor(vehicleRepository: VehicleRepository);
    create(vehicleData: Partial<Vehicle>): Promise<VehicleResponseDto>;
    findAll(): Promise<VehicleResponseDto[]>;
    findById(id: string): Promise<VehicleResponseDto>;
    delete(id: string): Promise<void>;
}
