import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsNumber, IsArray, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Name of the product',
    example: 'Brake Pads',
  })
  @IsString()
  @IsNotEmpty()
  productName: string;

  @ApiProperty({
    description: 'HSN code for the product',
    example: '87083000',
    required: false,
  })
  @IsString()
  @IsOptional()
  hsnCode?: string;

  @ApiProperty({
    description: 'Shelf position where the product is located',
    example: 'Rack A - Shelf 3',
    required: false,
  })
  @IsString()
  @IsOptional()
  shelfPosition?: string;

  @ApiProperty({
    description: 'UUID of the product category',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  @IsNotEmpty()
  categoryId: string;

  @ApiProperty({
    description: 'UUID of the product brand',
    example: '123e4567-e89b-12d3-a456-426614174001',
  })
  @IsUUID()
  @IsNotEmpty()
  brandId: string;

  @ApiProperty({
    description: 'Quantity of the product in stock',
    example: 50,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  quantity: number;

  @ApiProperty({
    description: 'Price of the product',
    example: 299.99,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({
    description: 'Array of vehicle UUIDs that are compatible with this product',
    example: ['123e4567-e89b-12d3-a456-426614174002', '123e4567-e89b-12d3-a456-426614174003'],
    required: false,
    type: [String],
  })
  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  compatibleVehicles?: string[];
}