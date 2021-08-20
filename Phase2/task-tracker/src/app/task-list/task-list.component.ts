import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../taskModel';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'taskName', 'task', 'deadline'];
  tasks:Task[] = [];
  constructor(public taskService:TaskService) { }

  ngOnInit(): void {
  }

  getTask(){
    this.tasks = this.taskService.getTask();
  }
  




}
