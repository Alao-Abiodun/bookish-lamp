/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateTaskDto } from '../dtos';
import { TasksService } from '../services';
import { ITask } from '../interfaces';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  findAll(): Promise<ITask[]> {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ITask> {
    return this.taskService.findOne(id);
  }

  @Post()
  create(@Body() data: CreateTaskDto): Promise<ITask> {
    return this.taskService.create(data);
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updatedTask: CreateTaskDto, @Param('id') id): string {
    return `Update ${id} with field completed ${updatedTask.completed}`;
  }
}
