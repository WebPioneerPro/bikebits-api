import { ApiProperty } from '@nestjs/swagger';

export class ProductResponseDto {
  @ApiProperty({
    description: 'Product UUID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'Name of the product',
    example: 'Brake Pads',
  })
  productName: string;

  @ApiProperty({
    description: 'HSN code for the product',
    example: '87083000',
    required: false,
  })
  hsnCode: string;

  @ApiProperty({
    description: 'Shelf position where the product is located',
    example: 'Rack A - Shelf 3',
    required: false,
  })
  shelfPosition: string;

  @ApiProperty({
    description: 'UUID of the product category',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  categoryId: string;

  @ApiProperty({
    description: 'Name of the product category',
    example: 'Brake Parts',
  })
  categoryName: string;

  @ApiProperty({
    description: 'UUID of the product brand',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  brandId: string;

  @ApiProperty({
    description: 'Name of the product brand',
    example: 'Bosch',
  })
  brandName: string;

  @ApiProperty({
    description: 'Quantity of the product in stock',
    example: 50,
  })
  quantity: number;

  @ApiProperty({
    description: 'Price of the product',
    example: 299.99,
  })
  price: number;

  @ApiProperty({
    description: 'Array of vehicle UUIDs that are compatible with this product',
    example: ['123e4567-e89b-12d3-a456-426614174002', '123e4567-e89b-12d3-a456-426614174003'],
    required: false,
    type: [String],
  })
  compatibleVehicles: string[];

  @ApiProperty({
    description: 'Array of vehicle names that are compatible with this product',
    example: ['Honda CBR 600RR', 'Yamaha R6'],
    required: false,
    type: [String],
  })
  compatibleVehicleNames: string[];

  @ApiProperty({
    description: 'Creation timestamp',
    example: '2024-01-13T15:30:00Z',
  })
  createdOn: Date;

  @ApiProperty({
    description: 'Last update timestamp',
    example: '2024-01-13T15:30:00Z',
  })
  updatedOn: Date;

  @ApiProperty({
    description: 'Active status',
    example: true,
  })
  isActive: boolean;

  @ApiProperty({
    description: 'UUID of user who created the product',
    example: '123e4567-e89b-12d3-a456-426614174004',
    required: false,
  })
  createdBy: string;

  @ApiProperty({
    description: 'UUID of user who last updated the product',
    example: '123e4567-e89b-12d3-a456-426614174005',
    required: false,
  })
  updatedBy: string;
}