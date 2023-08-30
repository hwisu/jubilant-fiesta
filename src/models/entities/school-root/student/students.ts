import {BaseEntity, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Student extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @CreateDateColumn()
    createdAt!: Date
}