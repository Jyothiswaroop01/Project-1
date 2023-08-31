import { Component, Input} from '@angular/core';
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
      const text = this.email;
      console.log(text);
      this.router.navigate(['products'],{queryParams:{text},});
    } else {
      alert('Login failed');
    }
  }
}
