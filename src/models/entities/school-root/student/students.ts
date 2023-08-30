import {BaseEntity, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Subscription} from "./subscription";

@Entity()
export class Student extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @ManyToMany(() => Subscription, (subscription) => subscription.student)
    subscriptions!: Subscription[]

    @CreateDateColumn()
    createdAt!: Date
}