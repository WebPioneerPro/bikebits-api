import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateVehicleDto {
  @ApiProperty({
    description: 'Name of the vehicle',
    example: 'Honda CBR 600RR',
  })
  @IsString()
  @IsNotEmpty()
  vehicleName: string;
}