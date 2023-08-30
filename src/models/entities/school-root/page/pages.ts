import { BaseEntity, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { School } from "../schools";

@Entity()
export class Page extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(
        (type) => School,
        (school) => school.pages
    )
    school!: School;

    @CreateDateColumn()
    createdAt!: Date
}