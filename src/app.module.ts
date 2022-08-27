/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { TaskModule } from './task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URI } from './config';

@Module({
  imports: [TaskModule, MongooseModule.forRoot(MONGO_URI)],
})
export class AppModule {}
