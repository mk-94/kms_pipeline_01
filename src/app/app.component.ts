import { DeleteAlertComponent } from './delete-alert/delete-alert.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { Component } from '@angular/core';
import {TaskService} from './task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kms01';

  constructor(
    public taskService: TaskService,
  ) {}
}
