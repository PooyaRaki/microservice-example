import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
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