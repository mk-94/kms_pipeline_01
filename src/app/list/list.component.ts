import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../model/Task';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() title: string;
  @Input() list: Task[];

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }
}
