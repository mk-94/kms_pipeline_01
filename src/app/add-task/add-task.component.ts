import { TaskService } from '../task.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  constructor(public taskService: TaskService) {}
  name: string;
  description: string;
  priority: string;
  category: string;
  isdone = false;
  ngOnInit(): void { }
  handleSubmit(): void {
    if (this.name && this.description != null){
      this.taskService.addTask(
        this.name,
        this.description,
        this.priority,
        this.category,
        this.isdone,
      );
      this.name = '';
      this.description = '';
      this.priority = '';
      this.category = '';
    }
  }
}
