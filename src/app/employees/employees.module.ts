import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeFilterComponent } from './employee-filter/employee-filter.component';


@NgModule({
  declarations: [EmployeesComponent, EmployeeListComponent, EmployeeCardComponent, EmployeeFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
