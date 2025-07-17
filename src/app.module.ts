import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

// Entities
import { Fighter } from './domain/entities/fighter.entity';
import { WeightClass } from './domain/entities/weight-class.entity';
import { Event } from './domain/entities/event.entity';
import { Fight } from './domain/entities/fight.entity';
import { Ranking } from './domain/entities/ranking.entity';

// Services
import { FighterService } from './application/services/fighter.service';

// Resolvers
import { FighterResolver } from './interfaces/graphql/resolvers/fighter.resolver';

// Database Config
import { getDatabaseConfig } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => getDatabaseConfig(configService),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forFeature([Fighter, WeightClass, Event, Fight, Ranking]),
  ],
  providers: [
    FighterService,
    FighterResolver,
  ],
})
export class AppModule {} 