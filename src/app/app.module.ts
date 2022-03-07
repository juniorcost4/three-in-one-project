import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from 'src/person/person.module';
import { HobbyModule } from 'src/hobby/hobby.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://cirrus-dev:cirrus-dev@cluster0.twr4x.mongodb.net/three-in-one-db'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    PersonModule,
    HobbyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
