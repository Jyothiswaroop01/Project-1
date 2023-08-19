import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:any="";
  password:any="";
  constructor(private router:Router, public objservice:MyserviceService){}

  onSubmit() {
    if (this.objservice.login(this.email, this.password)) {
      this.router.navigate(['dashboard']);
    } else {
      alert('Login failed');
    }
  }
}
