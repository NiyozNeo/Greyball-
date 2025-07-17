import { Field, ObjectType, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class WeightClass {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Float)
  weightLimit: number;

  @Field({ nullable: true })
  description: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
} 