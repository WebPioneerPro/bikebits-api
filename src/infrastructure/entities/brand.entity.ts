import { Entity, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';

@Entity('brands')
export class Brand extends BaseEntity {
  @ApiProperty({
    description: 'Name of the brand',
    example: 'Bosch',
  })
  @Column({
    type: 'varchar',
    name: 'brand_name',
    nullable: false,
  })
  brandName: string;
}