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
import { CreateTaskDto } from '../../dtos';
import { TasksService } from 'src/tasks/services';
import { Task } from '../../interfaces';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Get()
  findAll(): Task[] {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Task {
    return this.taskService.findOne(id);
  }

  @Post()
  create(@Body() createTask: CreateTaskDto): string {
    return `title: ${createTask.title}, description: ${createTask.description}, completed: ${createTask.completed}`;
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
