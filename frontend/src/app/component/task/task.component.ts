import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: [] = [];

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.taskService.getTask()
      .subscribe({
        next: res => {
          console.log(res);
          this.tasks = res;
          console.log(this.tasks);
        },
        error: err => console.log(err)
      }
      )
  }


}
