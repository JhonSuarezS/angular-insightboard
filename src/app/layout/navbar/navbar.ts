import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  user = {
    name: 'John Doe',
    role: 'Administrator'
  };

  onLogout() {
    console.log('User logged out');
  }
}
