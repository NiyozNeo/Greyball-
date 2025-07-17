import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Fighter } from './fighter.entity';
import { Event } from './event.entity';

export enum FightResult {
  WIN = 'WIN',
  LOSS = 'LOSS',
  DRAW = 'DRAW',
  NO_CONTEST = 'NO_CONTEST'
}

export enum WinMethod {
  KNOCKOUT = 'KNOCKOUT',
  SUBMISSION = 'SUBMISSION',
  DECISION = 'DECISION',
  TKO = 'TKO',
  DQ = 'DQ'
}

@Entity('fights')
export class Fight {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Event, event => event.fights)
  event: Event;

  @ManyToOne(() => Fighter, fighter => fighter.fightsAsFighter1)
  fighter1: Fighter;

  @ManyToOne(() => Fighter, fighter => fighter.fightsAsFighter2)
  fighter2: Fighter;

  @Column({ type: 'enum', enum: FightResult, nullable: true })
  result: FightResult;

  @Column({ type: 'enum', enum: WinMethod, nullable: true })
  winMethod: WinMethod;

  @Column({ nullable: true })
  round: number;

  @Column({ nullable: true })
  time: string; // Format: "MM:SS"

  @Column({ default: false })
  isCompleted: boolean;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 