import {BaseEntity, Column, CreateDateColumn, Entity, Index, JoinColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
@Index(["studentId", "pageId"], { unique: true })
export class Subscriptions extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number

    @JoinColumn()
    studentId!: number

    @Column()
    pageId!: number

    @CreateDateColumn()
    @Index()
    createdAt!: Date
}