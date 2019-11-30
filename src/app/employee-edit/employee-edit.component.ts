import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpRequestService } from '../services/http-request.service';
import { Router } from '@angular/router';
import { DataStoreService } from '../services/data-store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  subscription: Subscription[] = [];
  isUpdate: boolean;
  employeeId: any;
  employeeForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required)
  });
  constructor(
    private http: HttpRequestService,
    private router: Router,
    private dataStore: DataStoreService
  ) { }

  ngOnInit() {
    const employeeDetail = this.dataStore.getData();

    if (employeeDetail.name.length > 0) {
      this.employeeId = employeeDetail.id;
      this.isUpdate = true;
      this.employeeForm.patchValue({
                name: employeeDetail.name,
                designation: employeeDetail.designation,
                salary: parseInt(employeeDetail.salary, 10)
              });
    }
  }

  onSubmit(value) {
    const data: {} = value;

    this.http.addEmployee(data).subscribe((response) => {
      if (response) {
        console.log('added successfully');
        this.router.navigateByUrl('/');
      }
    }, (error) => {
      console.log('something went wrong');
    });
  }
  onClose() {
    this.router.navigateByUrl('/');
  }

  onSave(employeeObject) {
    const data = employeeObject;
    data.id = this.employeeId;
    this.http.updateEmployee(data).subscribe((response) => {
      if (response) {
        console.log('updated Successfully');
        this.router.navigateByUrl('/');
      } else {
        console.log('error');
      }
    });
  }
}
