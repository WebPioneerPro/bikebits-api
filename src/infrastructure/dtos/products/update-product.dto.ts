import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty({
    description: 'Name of the product',
    example: 'Brake Pads',
    required: false,
  })
  productName?: string;

  @ApiProperty({
    description: 'HSN code for the product',
    example: '87083000',
    required: false,
  })
  hsnCode?: string;

  @ApiProperty({
    description: 'Shelf position where the product is located',
    example: 'Rack A - Shelf 3',
    required: false,
  })
  shelfPosition?: string;

  @ApiProperty({
    description: 'UUID of the product category',
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: false,
  })
  categoryId?: string;

  @ApiProperty({
    description: 'UUID of the product brand',
    example: '123e4567-e89b-12d3-a456-426614174001',
    required: false,
  })
  brandId?: string;

  @ApiProperty({
    description: 'Quantity of the product in stock',
    example: 50,
    minimum: 0,
    required: false,
  })
  quantity?: number;

  @ApiProperty({
    description: 'Price of the product',
    example: 299.99,
    minimum: 0,
    required: false,
  })
  price?: number;

  @ApiProperty({
    description: 'Array of vehicle UUIDs that are compatible with this product',
    example: ['123e4567-e89b-12d3-a456-426614174002', '123e4567-e89b-12d3-a456-426614174003'],
    required: false,
    type: [String],
  })
  compatibleVehicles?: string[];
}