import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpRequestService } from '../services/http-request.service';
import { Employee } from '../model/model';
import { Router } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';
declare var $: any;


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeDetails: any;
  testEmp: any;
  name: string;
  designation: string;
  salary: string;
  p = 1;
  searchQuery: any;
  @ViewChild('employeeId', {static: true})employeeId: ElementRef;
  deleteIndex: any;
  constructor(
    private httpService: HttpRequestService,
    private router: Router,
    private dataStore: DataStoreService
  ) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.httpService.getEmployeesData().subscribe((response) => {
      if (response) {
        this.employeeDetails = response;
        console.log(response);
      }
    }, (error) => {
      console.log(error);
    });
  }
  onEdit(employeeObject) {
    this.dataStore.setData(employeeObject);
    this.router.navigateByUrl('/employee-edit');
  }

  openModal(index) {
    $('#confirmationModal').modal('show');
    this.deleteIndex = index;
  }

  onDelete() {
    this.httpService.deleteEmployee(this.deleteIndex).subscribe((response) => {
      if (response) {
        this.getEmployees();
      }
    });
    $('#confirmationModal').modal('hide');
    this.getEmployees();
  }

}
