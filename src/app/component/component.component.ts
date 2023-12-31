import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent {
  loggedInUsername?: string;

  onLogin(username: string) {
    this.loggedInUsername = username;
  }
}
