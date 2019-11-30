import { Injectable, Output, EventEmitter } from '@angular/core';
import { Employee } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  @Output() setDataInForm = new EventEmitter();
  employee: Employee = {
    name: '',
    designation: '',
    salary: '',
    id: null
  };

  constructor() { }

  setData(data) {
    // this.setDataInForm.emit(data);
    this.employee.name = data.name;
    this.employee.designation = data.designation;
    this.employee.salary = data.salary;
    this.employee.id = data.id;
  }

  getData() {
    return this.employee;
  }
}
