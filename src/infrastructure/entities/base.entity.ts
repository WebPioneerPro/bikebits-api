import {
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        type: 'timestamptz',
        name: 'created_on',
    })
    createdOn: Date;

    @Column({
        type: 'uuid',
        name: 'created_by',
        nullable: true,
    })
    createdBy: string;

    @UpdateDateColumn({
        type: 'timestamptz',
        name: 'updated_on',
    })
    updatedOn: Date;

    @Column({
        type: 'uuid',
        name: 'updated_by',
        nullable: true,
    })
    updatedBy: string;

    @Column({
        type: 'boolean',
        name: 'is_active',
        default: true,
    })
    isActive: boolean;
}