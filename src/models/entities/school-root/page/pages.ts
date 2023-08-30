import {BaseEntity, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { School } from "../schools";
import { Notice } from "./notices/notices";
import {Subscription} from "../student/subscription";

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

    @ManyToMany(
        (type) => Subscription,
        (subscription) => subscription.page
    )
    subscriptions!: Subscription[]

    @CreateDateColumn()
    createdAt!: Date
}