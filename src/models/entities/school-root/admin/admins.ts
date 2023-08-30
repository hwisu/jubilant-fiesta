import {Entity, PrimaryGeneratedColumn,  CreateDateColumn, BaseEntity} from "typeorm"


@Entity()
export class Admin extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @CreateDateColumn()
    createdAt!: Date
}