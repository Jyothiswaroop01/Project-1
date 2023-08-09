import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  employee_Data=[ 
    {name:'Swaroop', ID:'52129250',Designation:'GET',Location:'Chennai'},
    {name:'Subhash', ID:'52129225',Designation:'GET',Location:'Chennai'},
    {name:'Viswa', ID:'52129836',Designation:'GET',Location:'Chennai'},
    {name:'Mahanth', ID:'52129926',Designation:'GET',Location:'Chennai'}
  ]

  public getdetails(){
    return this.employee_Data;
  }


}
