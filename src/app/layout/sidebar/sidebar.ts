import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  links = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/reports', label: 'Reports', icon: '📈' },
    { path: '/settings', label: 'Settings', icon: '⚙️' }
  ];
}

