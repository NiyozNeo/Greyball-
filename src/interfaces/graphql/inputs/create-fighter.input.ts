import { Field, InputType, Float, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

@InputType()
export class CreateFighterInput {
  @Field()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  nickname?: string;

  @Field()
  @IsNotEmpty()
  @IsDate()
  dateOfBirth: Date;

  @Field()
  @IsNotEmpty()
  @IsString()
  nationality: string;

  @Field(() => Float)
  @IsNotEmpty()
  @IsNumber()
  height: number;

  @Field(() => Float)
  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @Field(() => Float)
  @IsNotEmpty()
  @IsNumber()
  reach: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  stance: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  biography?: string;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  recordWins: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  recordLosses: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  recordDraws: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  knockouts: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  submissions: number;

  @Field(() => Int)
  @IsNotEmpty()
  @IsNumber()
  decisions: number;

  @Field()
  @IsNotEmpty()
  @IsString()
  weightClassId: string;
} 