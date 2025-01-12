import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task! : Task;
  private tasksService : TasksService;

  constructor(tasksService: TasksService){
    this.tasksService = tasksService;
  }

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id)
  }


}
