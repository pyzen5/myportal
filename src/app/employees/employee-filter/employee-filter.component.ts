import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.scss']
})
export class EmployeeFilterComponent implements OnInit {
  @Output() filterData = new EventEmitter();
  filterObj = {
    department: '',
    rollType: '',
    designation: '',
    experience: '',
    doj: '',
    location: '',
    team: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  clearFilter() {
    this.filterObj = {
      department: '',
      rollType: '',
      designation: '',
      experience: '',
      doj: '',
      location: '',
      team: ''
    };
    this.filterData.emit(this.filterObj);
  }

  getFilterData() {
    this.filterData.emit(this.filterObj);
  }
}
