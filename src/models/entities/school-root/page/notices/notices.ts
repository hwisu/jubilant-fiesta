import {BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Page } from "../pages";

@Entity()
export class Notice extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    title!: string

    @Column()
    content!: string

    @ManyToOne(
        (type) => Page,
        (page) => page.notices,{onDelete: 'CASCADE'}
    )
    page!: Page

    @CreateDateColumn()
    createdAt!: Date
}