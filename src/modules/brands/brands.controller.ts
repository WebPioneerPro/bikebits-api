import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  HttpStatus,
  HttpCode,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { BrandsService } from './brands.service';
import { CreateBrandDto } from '../../infrastructure/dtos/brands/create-brand.dto';
import { BrandResponseDto } from '../../infrastructure/dtos/brands/brand-response.dto';

@ApiTags('Brands')
@Controller('brands')
@UsePipes(new ValidationPipe({ transform: true }))
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new brand' })
  @ApiBody({ type: CreateBrandDto })
  @ApiResponse({
    status: 201,
    description: 'Brand created successfully',
    type: BrandResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - Invalid input data',
  })
  async create(@Body() brandData: CreateBrandDto): Promise<BrandResponseDto> {
    return await this.brandsService.create(brandData);
  }

  @Get()
  @ApiOperation({ summary: 'Get all active brands' })
  @ApiResponse({
    status: 200,
    description: 'List of all active brands with ID and name',
    type: [BrandResponseDto],
  })
  async findAll(): Promise<BrandResponseDto[]> {
    return await this.brandsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a brand by ID' })
  @ApiParam({
    name: 'id',
    description: 'Brand UUID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiResponse({
    status: 200,
    description: 'Brand found',
    type: BrandResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Brand not found',
  })
  async findById(@Param('id') id: string): Promise<BrandResponseDto> {
    return await this.brandsService.findById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Soft delete a brand' })
  @ApiParam({
    name: 'id',
    description: 'Brand UUID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @ApiResponse({
    status: 204,
    description: 'Brand deleted successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'Brand not found',
  })
  async delete(@Param('id') id: string): Promise<void> {
    return await this.brandsService.delete(id);
  }
}