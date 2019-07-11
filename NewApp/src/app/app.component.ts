import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewApp';
  public EMP={
     "Name":"",
     "Email":"",
     "Mobile_number":null
  }
 
  public Enter_Id=null;
  public ID=null;
  public Details:any=[];
  public Detail:any=[];
  public employees={
    "id":null,
    "name":"",
    "email":"",
    "phone":null

  }

  
  public Persons:any=[];
  constructor(private employee:EmployeeService){

  }
  ngOnInit() {
    }

  
    onClk = function(){
      this.employee.setEmployee(this.employees)
   .subscribe((data)=>{
     console.log("new data....",data);
     this.Details=data;
     console.log("new data details...",this.Details);
   })
   console.log("employee-list.ts file.....",this.employees);
  }
  onClick = function()
  {
    this.employee.getEmployee()
    .subscribe((data )=>
    { 
      this.Detail=data;
      console.log('getting values.....', this.Detail,typeof(data));
    });
   // .subscribe(data=> console.log("json details......",JSON.stringify(data)));

  }
  onSubmit()
  {
    this.employee.deleteEmployee(this.ID)

    .subscribe((data)=>{
         
         console.log("deleting data......",(this.employees))
         this.employee.getEmployee()
    .subscribe((data )=>
    { 
      this.Detail=data;
      console.log('getting values.....', this.Detail,typeof(data));
    });
   // .subscribe(data=> console.log("json details......",JSON.stringify(data)));
    })
    
   console.log("Detail....",this.Detail);

  }
  Submit=function(){
    this.employee.updateEmployee(this.Enter_Id,this.EMP.Name,this.EMP.Email,this.EMP.Mobile_number)
    .subscribe((data)=>{
      this.employees=data
      this.employee.getEmployee()
    .subscribe((data )=>
    { 
      this.Detail=data;
      console.log('getting values.....', this.Detail,typeof(data));
    });
      console.log(this.employees);
    })
  }
   
  }
 