import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {DeleteAlertComponent} from './delete-alert/delete-alert.component';
import {AddTaskComponent} from './add-task/add-task.component';
import {CategoryComponent} from './category/category.component';
import {ListComponent} from './list/list.component';
import {SearchComponent} from './search/search.component';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DeleteAlertComponent,
        AddTaskComponent,
        CategoryComponent,
        ListComponent,
        SearchComponent
      ],
      imports: [
        FormsModule
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'kms01'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('kms01');
  });
});
