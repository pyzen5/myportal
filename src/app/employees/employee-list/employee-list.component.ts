import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @Input() employeeList;
  @Output() filterData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onCheck(e) {
    e.target.checked ? this.filterData.emit({ location: 'Bangalore' }) : this.filterData.emit({});
  }

}
