import { Entity, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity } from './base.entity';

@Entity('users')
export class User extends BaseEntity {
    @ApiProperty({
        description: 'Email address of the user',
        example: 'user@example.com',
    })
    @Column({
        type: 'varchar',
        name: 'email',
        unique: true,
        nullable: false,
    })
    email: string;

    @Column({
        type: 'varchar',
        name: 'password',
        nullable: false,
    })
    password: string;

    @ApiProperty({
        description: 'First name of the user',
        example: 'John',
    })
    @Column({
        type: 'varchar',
        name: 'first_name',
        nullable: true,
    })
    firstName: string;

    @ApiProperty({
        description: 'Last name of the user',
        example: 'Doe',
    })
    @Column({
        type: 'varchar',
        name: 'last_name',
        nullable: true,
    })
    lastName: string;
}
