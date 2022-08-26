/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { Task } from '../../interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly Task: Model<Task>) {}
  private readonly tasks: Task[] = [
    {
      id: '1',
      title: 'Create a simple typescript project',
      description: 'learning more about typescript.',
      completed: true,
    },
    {
      id: '2',
      title: 'learn some algorithm techniques',
      description: 'Learn some algorithms',
      completed: false,
    },
  ];

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id): Task {
    return this.tasks.find((task) => task.id === id);
  }
}
