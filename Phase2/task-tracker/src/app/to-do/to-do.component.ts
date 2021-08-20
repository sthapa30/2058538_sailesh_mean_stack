import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(public taskService:TaskService) { }

  ngOnInit(): void {
  }

  addTask(taskForm:NgForm){
    let task = taskForm.value;
    this.taskService.addTaskService(task);

  }

  

}
