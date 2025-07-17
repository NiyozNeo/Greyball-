import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Fighter } from './fighter.entity';
import { WeightClass } from './weight-class.entity';

@Entity('rankings')
export class Ranking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Fighter, fighter => fighter.rankings)
  fighter: Fighter;

  @ManyToOne(() => WeightClass)
  weightClass: WeightClass;

  @Column()
  rank: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  points: number;

  @Column({ type: 'jsonb', nullable: true })
  rankingFactors: {
    recentPerformance: number;
    strengthOfSchedule: number;
    winStreak: number;
    qualityOfWins: number;
  };

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
} 