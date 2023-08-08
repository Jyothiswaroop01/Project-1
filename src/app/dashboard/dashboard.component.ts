import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  employeeData: empData[] = [
    {name:'Swaroop', ID:'52129250',Designation:'GET',Location:'Chennai'},
    {name:'Subhash', ID:'52129225',Designation:'GET',Location:'Chennai'},
    {name:'Viswa', ID:'52129836',Designation:'GET',Location:'Chennai'},
    {name:'Mahanth', ID:'52129926',Designation:'GET',Location:'Chennai'}
  ]
}

class empData{
  name? : string;
  ID? : string;
  Designation? : string;
  Location? : string;
}
