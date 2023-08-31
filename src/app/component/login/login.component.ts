import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loggedIn = new EventEmitter<string>();

  login() {
    const username = 'User123';
    this.loggedIn.emit(username);
  }
}
