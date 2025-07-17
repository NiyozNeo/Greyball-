import { Field, ObjectType, ID, Float, Int } from '@nestjs/graphql';
import { WeightClass } from './weight-class.type';

@ObjectType()
export class Fighter {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field({ nullable: true })
  nickname: string;

  @Field()
  dateOfBirth: Date;

  @Field()
  nationality: string;

  @Field(() => Float)
  height: number;

  @Field(() => Float)
  weight: number;

  @Field(() => Float)
  reach: number;

  @Field()
  stance: string;

  @Field({ nullable: true })
  biography: string;

  @Field(() => Int)
  recordWins: number;

  @Field(() => Int)
  recordLosses: number;

  @Field(() => Int)
  recordDraws: number;

  @Field(() => Int)
  knockouts: number;

  @Field(() => Int)
  submissions: number;

  @Field(() => Int)
  decisions: number;

  @Field(() => WeightClass)
  weightClass: WeightClass;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
} 