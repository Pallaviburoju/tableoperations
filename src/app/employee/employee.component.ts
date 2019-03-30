import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from 'exHttpdb/src/app/httpservice.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
public Employee=[]; 
  constructor(private myService:HttpserviceService) { }

  ngOnInit() {
    this.myService.getData().subscribe(data=>this.Employee=data);
  }

}
