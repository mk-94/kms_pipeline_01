import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText: string;

  constructor(public taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  searchTasks(): void {
    this.taskService.searchTasks(this.searchText);
  }

}
