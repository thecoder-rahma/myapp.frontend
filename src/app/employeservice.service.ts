import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeserviceService {

  constructor(private http:HttpClient) { }
  getUserData(employeename: any , password: any){}
}
