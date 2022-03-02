import { Component, OnInit } from '@angular/core';
import { BackendAPIService } from '../../backend-api.service';
import { Employees } from '../../Employees';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees : Employees[] = [];  
  constructor(private myAPI : BackendAPIService,) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.myAPI.getUsers().subscribe
    (
      (response)=>
      {
        this.employees = response;
      },
      (error)=>
      {
        console.log("Error Occured : " + error);
      }
    )
  }
  getTotalemployees(){
   return this.employees.length;
  }
}
