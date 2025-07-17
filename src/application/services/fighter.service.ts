import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fighter } from '../../domain/entities/fighter.entity';
import { CreateFighterInput } from '../../interfaces/graphql/inputs/create-fighter.input';
import { UpdateFighterInput } from '../../interfaces/graphql/inputs/update-fighter.input';

@Injectable()
export class FighterService {
  constructor(
    @InjectRepository(Fighter)
    private readonly fighterRepository: Repository<Fighter>,
  ) {}

  async findAll(): Promise<Fighter[]> {
    return this.fighterRepository.find({
      relations: ['weightClass'],
    });
  }

  async findOne(id: string): Promise<Fighter> {
    const fighter = await this.fighterRepository.findOne({
      where: { id },
      relations: ['weightClass'],
    });

    if (!fighter) {
      throw new NotFoundException(`Fighter with ID ${id} not found`);
    }

    return fighter;
  }

  async create(createFighterInput: CreateFighterInput): Promise<Fighter> {
    const fighter = this.fighterRepository.create(createFighterInput);
    return this.fighterRepository.save(fighter);
  }

  async update(id: string, updateFighterInput: UpdateFighterInput): Promise<Fighter> {
    const fighter = await this.findOne(id);
    Object.assign(fighter, updateFighterInput);
    return this.fighterRepository.save(fighter);
  }

  async remove(id: string): Promise<void> {
    const fighter = await this.findOne(id);
    await this.fighterRepository.remove(fighter);
  }

  async findByWeightClass(weightClassId: string): Promise<Fighter[]> {
    return this.fighterRepository.find({
      where: { weightClass: { id: weightClassId } },
      relations: ['weightClass'],
    });
  }
} 