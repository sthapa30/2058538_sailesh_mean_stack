import { Injectable } from '@angular/core';
import { Task } from './taskModel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks:Task[] = [];
  showTask:boolean = false;

  constructor() { }

  addTaskService(task:any){
    this.tasks.push(task);
    this.showTask = true;
  }

  getTask(){
    return this.tasks;
  }

  getShowTask(){
    return this.showTask;
  }

}
