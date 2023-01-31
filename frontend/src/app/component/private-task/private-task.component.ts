import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';


@Component({
  selector: 'app-private-task',
  templateUrl: './private-task.component.html',
  styleUrls: ['./private-task.component.css']
})
export class PrivateTaskComponent implements OnInit {

  tasks = [];

  constructor(private taskService : TasksService) { }

  ngOnInit(): void {

    this.taskService.getPrivateTask().subscribe({
      next: res => {
        console.log(res);
        this.tasks = res;
        console.log(this.tasks);
      },
      error: err => console.log(err)
    })

  }

}
