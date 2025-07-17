import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Fight } from './fight.entity';
import { WeightClass } from './weight-class.entity';
import { Ranking } from './ranking.entity';

@Entity('fighters')
export class Fighter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  nickname: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  nationality: string;

  @Column()
  height: number; // in cm

  @Column()
  weight: number; // in kg

  @Column()
  reach: number; // in cm

  @Column()
  stance: string; // Orthodox, Southpaw, Switch

  @Column({ type: 'text', nullable: true })
  biography: string;

  @Column()
  recordWins: number;

  @Column()
  recordLosses: number;

  @Column()
  recordDraws: number;

  @Column()
  knockouts: number;

  @Column()
  submissions: number;

  @Column()
  decisions: number;

  @ManyToOne(() => WeightClass, weightClass => weightClass.fighters)
  weightClass: WeightClass;

  @OneToMany(() => Fight, fight => fight.fighter1)
  fightsAsFighter1: Fight[];

  @OneToMany(() => Fight, fight => fight.fighter2)
  fightsAsFighter2: Fight[];

  @OneToMany(() => Ranking, ranking => ranking.fighter)
  rankings: Ranking[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 