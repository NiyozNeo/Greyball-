import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Fighter } from '../types/fighter.type';
import { FighterService } from '../../../application/services/fighter.service';
import { CreateFighterInput } from '../inputs/create-fighter.input';
import { UpdateFighterInput } from '../inputs/update-fighter.input';

@Resolver(() => Fighter)
export class FighterResolver {
  constructor(private readonly fighterService: FighterService) {}

  @Query(() => [Fighter])
  async fighters(): Promise<Fighter[]> {
    return this.fighterService.findAll();
  }

  @Query(() => Fighter)
  async fighter(@Args('id', { type: () => ID }) id: string): Promise<Fighter> {
    return this.fighterService.findOne(id);
  }

  @Mutation(() => Fighter)
  async createFighter(
    @Args('createFighterInput') createFighterInput: CreateFighterInput,
  ): Promise<Fighter> {
    return this.fighterService.create(createFighterInput);
  }

  @Mutation(() => Fighter)
  async updateFighter(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateFighterInput') updateFighterInput: UpdateFighterInput,
  ): Promise<Fighter> {
    return this.fighterService.update(id, updateFighterInput);
  }

  @Mutation(() => Boolean)
  async removeFighter(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
    await this.fighterService.remove(id);
    return true;
  }

  @Query(() => [Fighter])
  async fightersByWeightClass(
    @Args('weightClassId', { type: () => ID }) weightClassId: string,
  ): Promise<Fighter[]> {
    return this.fighterService.findByWeightClass(weightClassId);
  }
} 