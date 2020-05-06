import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  employeeList = [
    // tslint:disable-next-line: max-line-length
    { empId: 1001, avatarPath: '', name: 'Andrew Bridgen', designation: 'Sr. UI Developer', rating: 3.5, experience: '5.8 years', doj: '2017', currentTeam: 'OCBC Singapore', rm: 'Lalit Agarwal', mobile: '7406559241', email: 'andrew@infrrd.ai', location: 'Bangalore', department: 'Front End Development', rollType: 'Full Time' },
    // tslint:disable-next-line: max-line-length
    { empId: 1002, avatarPath: '', name: 'Andrew Bridgen', designation: 'Sr. UI Developer', rating: 3.5, experience: '5.8 years', doj: '2017', currentTeam: 'OCBC Singapore', rm: 'Lalit Agarwal', mobile: '7406559241', email: 'andrew@infrrd.ai', location: 'Bangalore', department: 'Front End Development', rollType: 'Full Time' },
    // tslint:disable-next-line: max-line-length
    { empId: 1003, avatarPath: '', name: 'Andrew Bridgen', designation: 'Sr. UI Developer', rating: 3.5, experience: '5.8 years', doj: '2017', currentTeam: 'OCBC Singapore', rm: 'Lalit Agarwal', mobile: '7406559241', email: 'andrew@infrrd.ai', location: 'Bangalore', department: 'Front End Development', rollType: 'Full Time' },
    // tslint:disable-next-line: max-line-length
    { empId: 1004, avatarPath: '', name: 'Andrew Bridgen', designation: 'Sr. UI Developer', rating: 3.5, experience: '5.8 years', doj: '2018', currentTeam: 'OCBC Singapore', rm: 'Lalit Agarwal', mobile: '7406559241', email: 'andrew@infrrd.ai', location: 'Bangalore', department: 'Front End Development', rollType: 'Full Time' },
    // tslint:disable-next-line: max-line-length
    { empId: 1005, avatarPath: '', name: 'Andrew Bridgen', designation: 'Sr. UI Developer', rating: 3.5, experience: '5.8 years', doj: '2017', currentTeam: 'OCBC Singapore', rm: 'Lalit Agarwal', mobile: '7406559241', email: 'andrew@infrrd.ai', location: 'Bangalore', department: 'Front End Development', rollType: 'Full Time' },
    { empId: 1005, avatarPath: '', name: 'Andrew Bridgen', designation: 'Sr. UI Developer', rating: 3.5, experience: '5.8 years', doj: '2017', currentTeam: 'OCBC Singapore', rm: 'Lalit Agarwal', mobile: '7406559241', email: 'andrew@infrrd.ai', location: 'Mumbai', department: 'Front End Development', rollType: 'Full Time' }
  ];
  filteredList = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredList = this.employeeList;
  }

  filterData(e) {
    this.filteredList = this.employeeList.filter(emp => {
      return Object.keys(e).every(key => {
        return !(e[key] !== '' && emp[key] !== e[key]);
      });
    });
  }
}
