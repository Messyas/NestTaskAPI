import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { FindAllParameters, TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post() //define o metodo - quando deixado em branco ele entende que tanto task quanto task/ permitem acesso ao recurso
  create(@Body() task: TaskDto) {
    this.taskService.create(task);
  }

  @Get('/:id') //vai dar acesso a um parametro do tipo id, sendo id o nome de recurso
  findById(@Param('id') id: string): TaskDto {
    return this.taskService.findById(id);
  }

  @Get()
  findAll(@Query() params: FindAllParameters): TaskDto[] {
    return this.taskService.findALL(params);
  }

  @Put()
  update(@Body() task: TaskDto) {
    this.taskService.update(task);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.taskService.remove(id);
  }
}
