import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  dynamicTxt:string = '';

  constructor(private router: Router){
  }
  username?: string = '';
  password?: string = '';

  login() {
    if (this.username == 'Swaroop' && this.password == 'password') {
      console.log('Login successful');
      this.router.navigate(['dashboard']);
    } else {
      console.log('Login failed');
      alert('In correct Login details')
    }
  }
}
