import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({
    description: 'Name of the brand',
    example: 'Bosch',
  })
  @IsString()
  @IsNotEmpty()
  brandName: string;
}