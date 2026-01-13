import { Entity, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';

@Entity('categories')
export class Category extends BaseEntity {
  @ApiProperty({
    description: 'Name of the category',
    example: 'Brake Parts',
  })
  @Column({
    type: 'varchar',
    name: 'category_name',
    nullable: false,
  })
  categoryName: string;
}