import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Fighter } from './fighter.entity';

@Entity('weight_classes')
export class WeightClass {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  weightLimit: number; // in kg

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Fighter, fighter => fighter.weightClass)
  fighters: Fighter[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 