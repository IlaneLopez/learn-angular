import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';


export const appRoutes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'task/:id',
    component: TaskComponent
  },
  {
    path: 'new',
    component: TaskComponent
  },
  {
    path: '',
    component: TasksComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
