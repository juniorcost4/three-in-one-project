import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://cirrus-dev:cirrus-dev@cluster0.twr4x.mongodb.net/three-in-one-db'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
