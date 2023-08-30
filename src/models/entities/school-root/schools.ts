import {Entity, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, Column, ManyToOne, OneToMany} from "typeorm"
import {Page} from "./page/pages";

@Entity()
export class School extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    area!: string

    @OneToMany(
        (type) => Page,
        (page) => page.school
    )
    pages!: Page[]

    @CreateDateColumn()
    createdAt!: Date
}