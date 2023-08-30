import {BaseEntity, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { School } from "../schools";
import { Notice } from "./notices/notices";

@Entity()
export class Page extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(
        (type) => School,
        (school) => school.pages, {onDelete: 'CASCADE'}
    )
    school!: School;

    @OneToMany(
        (type) => Notice,
        (notice) => notice.page
    )
    notices!: Notice[];


    @CreateDateColumn()
    createdAt!: Date
}