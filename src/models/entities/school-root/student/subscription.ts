import {
    BaseEntity,
    CreateDateColumn,
    Entity,
    Index, JoinColumn, JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import {Student} from "./students";
import {Page} from "../page/pages";

@Entity()
export class Subscription extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @ManyToMany(() => Student, (student) => student.subscriptions)
    @JoinTable()
    student!: Student

    @ManyToMany(() => Page, (page) => page.subscriptions)
    @JoinTable()
    page!: Page

    @CreateDateColumn()
    @Index()
    createdAt!: Date
}