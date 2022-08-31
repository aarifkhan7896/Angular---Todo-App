import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { MytodoComponent } from './components/mytodo/mytodo.component';

const routes: Routes = [{
  path:'',
  component:MytodoComponent
},{
  path:'edit/:id',
  component:EditTodoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
