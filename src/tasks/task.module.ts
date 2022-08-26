/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './controllers';
import { TasksService } from './services';
import { TaskSchema } from './schemas/task.schema'

@Module({
  imports: [MongooseModule.forFeature([{name: 'Task', schema: TaskSchema}])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
