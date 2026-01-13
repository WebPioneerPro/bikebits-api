import { Entity, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';

@Entity('vehicles')
export class Vehicle extends BaseEntity {
  @ApiProperty({
    description: 'Name of the vehicle',
    example: 'Honda CBR 600RR',
  })
  @Column({
    type: 'varchar',
    name: 'vehicle_name',
    nullable: false,
  })
  vehicleName: string;
}