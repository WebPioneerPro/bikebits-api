import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Name of the category',
    example: 'Brake Parts',
  })
  @IsString()
  @IsNotEmpty()
  categoryName: string;
}