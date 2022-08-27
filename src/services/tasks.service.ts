/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { ITask } from '../interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly Task: Model<ITask>) {}

  async findAll(): Promise<ITask[]> {
    return await this.Task.find();
  }

  async findOne(id: string): Promise<ITask> {
    return await this.Task.findById({ _id: id });
  }

  async create(data: ITask): Promise<ITask> {
    return await this.Task.create(data);
  }
}
