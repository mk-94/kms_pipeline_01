import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DoneComponent } from './done/done.component';
import { ListComponent } from './list/list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { CategoryComponent } from './category/category.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { DeleteAlertComponent } from './delete-alert/delete-alert.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DoneComponent,
    ListComponent,
    AddTaskComponent,
    CategoryComponent,
    SearchComponent,
    CategoryComponent,
    DeleteAlertComponent,
    EditTaskComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
