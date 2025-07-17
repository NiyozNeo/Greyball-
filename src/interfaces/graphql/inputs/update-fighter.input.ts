import { Field, InputType, Float, Int, PartialType } from '@nestjs/graphql';
import { CreateFighterInput } from './create-fighter.input';

@InputType()
export class UpdateFighterInput extends PartialType(CreateFighterInput) {} 