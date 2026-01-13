import { Entity, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';

@Entity('products')
export class Product extends BaseEntity {
  @ApiProperty({
    description: 'Name of the product',
    example: 'Brake Pads',
  })
  @Column({
    type: 'varchar',
    name: 'product_name',
    nullable: false,
  })
  productName: string;

  @ApiProperty({
    description: 'HSN code for the product',
    example: '87083000',
    required: false,
  })
  @Column({
    type: 'varchar',
    name: 'hsn_code',
    nullable: true,
  })
  hsnCode: string;

  @ApiProperty({
    description: 'Shelf position where the product is located',
    example: 'Rack A - Shelf 3',
    required: false,
  })
  @Column({
    type: 'varchar',
    name: 'shelf_position',
    nullable: true,
  })
  shelfPosition: string;

  @ApiProperty({
    description: 'UUID of the product category',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @Column({
    type: 'uuid',
    name: 'category_id',
    nullable: false,
  })
  categoryId: string;

  @ApiProperty({
    description: 'UUID of the product brand',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  @Column({
    type: 'uuid',
    name: 'brand_id',
    nullable: false,
  })
  brandId: string;

  @ApiProperty({
    description: 'Quantity of the product in stock',
    example: 50,
  })
  @Column({
    type: 'int',
    name: 'quantity',
    nullable: false,
    default: 0,
  })
  quantity: number;

  @ApiProperty({
    description: 'Price of the product',
    example: 299.99,
  })
  @Column({
    type: 'decimal',
    name: 'price',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  price: number;

  @ApiProperty({
    description: 'Array of vehicle UUIDs that are compatible with this product',
    example: ['123e4567-e89b-12d3-a456-426614174002', '123e4567-e89b-12d3-a456-426614174003'],
    required: false,
    type: [String],
  })
  @Column({
    type: 'uuid',
    name: 'compatible_vehicles',
    array: true,
    nullable: true,
  })
  compatibleVehicles: string[];
}