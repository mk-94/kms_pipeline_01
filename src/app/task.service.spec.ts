import { TestBed } from '@angular/core/testing';
import { Task } from 'src/model/Task';

import { TaskService } from './task.service';
import {Category} from '../model/Category';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a task', () => {
    expect(service.taskList.length).toBe( 0);

    expect(service.addTask('Test 1', 'Test 1 Description', 'High', 'Test1', false)).toBeTrue();
    expect(service.taskList.length).toBe(1);

    expect(service.addTask('Test 2', 'Test 2 Description', 'High', 'Test2', false)).toBeTrue();
    expect(service.taskList.length).toBe(2);
    expect(service.taskList[1].description).toBe('Test 2 Description');
    expect(service.taskList[1].priority).toBe('High');
    expect(service.taskList[1].category).toBe('Test2');
    expect(service.taskList[1].isDone).toBe(false);
  });

  it('should not add a task', () => {
    expect(service.addTask('', 'Test 2 Description', 'High', 'Test2', false)).toBeFalse();
    expect(service.taskList.length).toBe( 0 );

    expect(service.addTask('Test 3', '', 'High', 'Test3', false)).toBeFalse();
    expect(service.taskList.length).toBe( 0);
  });

  it('should edit task', () => {
    service.taskList.push(new Task('Test 1', 'Test 1 Description', 'High', 'Test', false),
      new Task('Test 2', 'Test 2 Description', 'High', 'Test', false));
    expect(service.taskList.length).toBe( 2 );

    expect(service.taskList[0].name).toBe('Test 1');
    expect(service.edit(0, 'TestEdit', 'Test 1 Description', 'High', 'Test')).toBeTrue();
    expect(service.taskList[0].name).toBe('TestEdit');

    expect(service.taskList[1].description).toBe('Test 2 Description');
    expect(service.edit(1, 'Test 2', 'TestEdit Description', 'High', 'Test')).toBeTrue();
    expect(service.taskList[1].description).toBe('TestEdit Description');
  });

  it('should not edit task by unknown taskId', () => {
    service.taskList.push(new Task('Test 1', 'Test 1 Description', 'High', 'Test', false),
      new Task('Test 2', 'Test 2 Description', 'High', 'Test', false));
    expect(service.taskList.length).toBe( 2 );

    expect(service.edit(2, 'TestEdit', 'Test 1 Description', 'High', 'Test')).toBeFalse();
  });

  it('should delete tasks', () => {
    service.taskList.push(new Task('Test 1', 'Test 1 Description', 'High', '', false),
      new Task('Test 2', 'Test 2 Description', 'High', '', false));
    expect(service.taskList.length).toBe( 2 );
    expect(service.delete(0)).toBeTrue();
    expect(service.taskList.length).toBe(1);
    expect(service.delete(2)).toBeFalse();
    expect(service.taskList.length).toBe(1);
  });

  it('search should return 3 objects with high priority', () => {
    for (let i = 0; i < 3; i++) {
      service.taskList.push(new Task('Priority Title', 'Priority Description', 'High', '', false));
    }
    for (let i = 0; i < 3; i++) {
      service.taskList.push(new Task('Priority Title', 'Priority Description', 'Low', '', false));
    }
    service.searchTasks('High');
    expect(service.resultSearchedList.length).toBe(3);
    for (const task of service.resultSearchedList) {
      expect(task.priority).toEqual('High');
    }
  });

  it('search should merge done and undone list with same title and return two tasks', () => {
    service.taskList.push(new Task('Same Title', 'Priority Description', 'High', '', false));
    service.doneList.push(new Task('Same Title', 'Priority Description', 'Low', '', true));
    service.searchTasks('Same Title');
    expect(service.resultSearchedList.length).toBe(2);
    for (const task of service.resultSearchedList) {
      expect(task.name).toEqual('Same Title');
    }
  });

  it('no search results are expected', () => {
    for (let i = 0; i < 3; i++) {
      service.taskList.push(new Task('Priority Title', 'Priority Description', 'High', '', false));
    }
    for (let i = 0; i < 3; i++) {
      service.doneList.push(new Task('Priority Title', 'Priority Description', 'Low', '', true));
    }
    service.searchTasks(undefined);
    expect(service.resultSearchedList.length).toBe(0);
    service.searchTasks('');
    expect(service.resultSearchedList.length).toBe(0);
    service.searchTasks('no results');
    expect(service.resultSearchedList.length).toBe(0);
  });
});
