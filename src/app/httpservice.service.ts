import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'exHttpdb/node_modules/rxjs';
import { Employee } from 'exHttpdb/src/employee';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  url:string="http://localhost:3000/Employees";
  constructor(private http:HttpClient) { }
  
  getData(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url);
  }
}
