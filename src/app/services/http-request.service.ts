import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  url = 'http://localhost:3000/employees';
  constructor(
    private http: HttpClient
  ) { }

  getEmployeesData() {
    const response =  this.http.get(this.url);
    return response;
  }

  addEmployee(emp) {
    return this.http.post(this.url, emp);
  }

  deleteEmployee(id: number) {
  return this.http.delete(this.url + '/' + id);
  }

  updateEmployee(emp) {
    return this.http.put(this.url + '/' + emp.id, emp);
  }
}

