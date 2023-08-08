import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project-1';
  constructor(private router: Router){

   }
  LClick(){
  this.router.navigate(['login']);
  }
  DClick(){
  this.router.navigate(['dashboard']);
  }

}
