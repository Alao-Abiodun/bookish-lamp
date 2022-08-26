/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TasksController } from './tasks/controllers';
import { AppService } from './app.service';
import { TasksService } from './tasks/services';
import { TasksModule } from './tasks/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URI } from './tasks/config';

@Module({
  imports: [TasksModule, MongooseModule.forRoot(MONGO_URI)],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService],
})
export class AppModule {}
