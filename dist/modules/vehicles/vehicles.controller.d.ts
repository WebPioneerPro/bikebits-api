import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from '../../infrastructure/dtos/vehicles/create-vehicle.dto';
import { VehicleResponseDto } from '../../infrastructure/dtos/vehicles/vehicle-response.dto';
export declare class VehiclesController {
    private readonly vehiclesService;
    constructor(vehiclesService: VehiclesService);
    create(vehicleData: CreateVehicleDto): Promise<VehicleResponseDto>;
    findAll(): Promise<VehicleResponseDto[]>;
    findById(id: string): Promise<VehicleResponseDto>;
    delete(id: string): Promise<void>;
}
