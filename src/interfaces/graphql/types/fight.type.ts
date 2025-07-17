import { Field, ObjectType, ID } from '@nestjs/graphql';
import { GraphQLBoolean, GraphQLInt } from 'graphql';
import { Event } from './event.type';
import { Fighter } from './fighter.type';
import { FightResult, WinMethod } from '../../../domain/entities/fight.entity';

@ObjectType()
export class Fight {
  @Field(() => ID)
  id: string;

  @Field(() => Event)
  event: Event;

  @Field(() => Fighter)
  fighter1: Fighter;

  @Field(() => Fighter)
  fighter2: Fighter;

  @Field(() => String, { nullable: true })
  result: FightResult;

  @Field(() => String, { nullable: true })
  winMethod: WinMethod;

  @Field(() => GraphQLInt, { nullable: true })
  round: number;

  @Field({ nullable: true })
  time: string;

  @Field(() => GraphQLBoolean)
  isCompleted: boolean;

  @Field({ nullable: true })
  notes: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
} 