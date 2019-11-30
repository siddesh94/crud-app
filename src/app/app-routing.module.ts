import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeeDetailsComponent
  },
  {
    path: 'employee-edit',
    component: EmployeeEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
