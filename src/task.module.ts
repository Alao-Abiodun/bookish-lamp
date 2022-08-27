/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { TasksService } from './services';
import { TasksController } from './controllers';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './schemas/task.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TaskModule {}
