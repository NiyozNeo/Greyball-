import { Field, ObjectType, ID, Float, Int } from '@nestjs/graphql';
import { Fighter } from './fighter.type';
import { WeightClass } from './weight-class.type';

@ObjectType()
class RankingFactors {
  @Field(() => Float)
  recentPerformance: number;

  @Field(() => Float)
  strengthOfSchedule: number;

  @Field(() => Int)
  winStreak: number;

  @Field(() => Float)
  qualityOfWins: number;
}

@ObjectType()
export class Ranking {
  @Field(() => ID)
  id: string;

  @Field(() => Fighter)
  fighter: Fighter;

  @Field(() => WeightClass)
  weightClass: WeightClass;

  @Field(() => Int)
  rank: number;

  @Field(() => Float)
  points: number;

  @Field(() => RankingFactors, { nullable: true })
  rankingFactors: RankingFactors;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
} 