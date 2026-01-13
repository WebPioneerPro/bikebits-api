import { ApiProperty } from '@nestjs/swagger';

export class BrandResponseDto {
  @ApiProperty({
    description: 'Brand UUID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    description: 'Name of the brand',
    example: 'Bosch',
  })
  brandName: string;

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
    description: 'UUID of user who created the brand',
    example: '123e4567-e89b-12d3-a456-426614174004',
    required: false,
  })
  createdBy: string;

  @ApiProperty({
    description: 'UUID of user who last updated the brand',
    example: '123e4567-e89b-12d3-a456-426614174005',
    required: false,
  })
  updatedBy: string;
}