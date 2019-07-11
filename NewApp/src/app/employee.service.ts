import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { catchError } from 'rxjs/operators'; 
import { url } from 'inspector';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url="http://localhost:4000/employees";
  // private url="http://localhost:3000/employees";
  //HTTP headers allow the client and the server to pass additional information with the request or the response. 
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  }

  constructor(private http:HttpClient) { }
  

  setEmployee(employee):Observable<Employee[]>{
    return this.http.post<Employee[]>(this.url,employee)
  }

  getEmployee():Observable<Employee[]>
  {

    return this.http.get<Employee[]>(this.url)
}
deleteEmployee(id):Observable<Employee[]>
{
 const _url=`${this.url}/${id}`;
  return this.http.delete<Employee[]>(_url)
 
}
updateEmployee(id,Name?:string,Email?:String,Phone?:number):Observable<Employee[]>
{
  const detail={
    name:Name,
    email:Email,
    phone:Phone

  }
  console.log("update details......",detail);
  const _url=`${this.url}/${id}`;
  return this.http.put<Employee[]>(_url,detail);
}



}
