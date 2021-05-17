import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../model/Task';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  public taskList: Task[] = [];
  public doneList: Task[] = [];

  constructor(public taskService: TaskService) {
  }


  ngOnInit(): void {
  }

}
