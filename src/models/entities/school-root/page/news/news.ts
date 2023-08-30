import { BaseEntity, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class News extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @CreateDateColumn()
    createdAt!: Date
}