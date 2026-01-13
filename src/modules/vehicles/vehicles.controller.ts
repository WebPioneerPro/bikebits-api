import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  HttpStatus,
  HttpCode,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from '../../infrastructure/dtos/vehicles/create-vehicle.dto';
import { VehicleResponseDto } from '../../infrastructure/dtos/vehicles/vehicle-response.dto';

@ApiTags('Vehicles')
@Controller('vehicles')
@UsePipes(new ValidationPipe({ transform: true }))
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new vehicle' })
  @ApiBody({ type: CreateVehicleDto })
  @ApiResponse({
    status: 201,
    description: 'Vehicle created successfully',
    type: VehicleResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - Invalid input data',
  })
  async create(@Body() vehicleData: CreateVehicleDto): Promise<VehicleResponseDto> {
    return await this.vehiclesService.create(vehicleData);
  }

  @Get()
  @ApiOperation({ summary: 'Get all active vehicles' })
  @ApiResponse({
    status: 200,
    description: 'List of all active vehicles with ID and name',
    type: [VehicleResponseDto],
  })
  async findAll(): Promise<VehicleResponseDto[]> {
    return await this.vehiclesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a vehicle by ID' })
  @ApiParam({
    name: 'id',
    description: 'Vehicle UUID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiResponse({
    status: 200,
    description: 'Vehicle found',
    type: VehicleResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Vehicle not found',
  })
  async findById(@Param('id') id: string): Promise<VehicleResponseDto> {
    return await this.vehiclesService.findById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Soft delete a vehicle' })
  @ApiParam({
    name: 'id',
    description: 'Vehicle UUID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiResponse({
    status: 204,
    description: 'Vehicle deleted successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Vehicle not found',
  })
  async delete(@Param('id') id: string): Promise<void> {
    return await this.vehiclesService.delete(id);
  }
}