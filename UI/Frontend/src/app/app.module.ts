import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentComponent } from './departament/departament.component';
import { ShowDepComponent } from './departament/show-dep/show-dep.component';
import { AddEditDepComponent } from './departament/add-edit-dep/add-edit-dep.component';
import { EmployeComponent } from './employe/employe.component';
import { ShowEmpComponent } from './employe/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employe/add-edit-emp/add-edit-emp.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeComponent,
    ShowEmpComponent,
    AddEditEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
