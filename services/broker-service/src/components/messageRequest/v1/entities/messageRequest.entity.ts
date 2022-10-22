import { Check, Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
@Check(`"message" <> ''`)
export class MessageRequest {
    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
    })
    public readonly id: number;

    @Index('token', { unique: true, })
    @Column({
        type: 'varchar',
    })
    public token: string;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    public message: string;

    @CreateDateColumn({
        type: 'timestamp',
    })
    public readonly createdAt: string;

    @UpdateDateColumn({
        type: 'timestamp',
    })
    public readonly updatedAt: string;
}