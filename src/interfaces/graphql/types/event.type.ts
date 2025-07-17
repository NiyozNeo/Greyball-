import { Field, ObjectType, ID } from '@nestjs/graphql';
import { GraphQLBoolean } from 'graphql';
import { Fight } from './fight.type';

@ObjectType()
export class Event {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  date: Date;

  @Field()
  venue: string;

  @Field()
  city: string;

  @Field()
  country: string;

  @Field({ nullable: true })
  description: string;

  @Field(() => GraphQLBoolean)
  isCompleted: boolean;

  @Field(() => [Fight])
  fights: Fight[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
} 