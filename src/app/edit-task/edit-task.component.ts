import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import {
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent implements OnInit {
  public taskId: number;
  public name: string;
  public description: string;
  public priority: string;
  public category: string;
  editForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    priority: new FormControl(),
    category: new FormControl(),
  });

  constructor(
    public taskService: TaskService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.taskId = this.taskService.taskId;
    const task = this.taskService.taskList[this.taskId];
    this.name = task.name;
    this.description = task.description;
    this.priority = task.priority;
    this.category = task.category;
    this.editForm.setValue({
      name: this.name,
      description: this.description,
      priority: this.priority,
      category: this.category,
    });
  }

  editSubmit(): void {
    this.taskId = this.taskService.taskId;
    this.taskService.edit(
      this.taskId,
      this.editForm.value.name,
      this.editForm.value.description,
      this.editForm.value.priority,
      this.editForm.value.category
    );
    this.activeModal.close(this.taskId);
  }
}
