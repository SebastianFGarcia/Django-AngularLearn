import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeComponent } from './employe/employe.component';
import { DepartamentComponent } from './departament/departament.component'

const routes: Routes = [
  { path:'employe', component:EmployeComponent },
  { path:'departament', component:DepartamentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
