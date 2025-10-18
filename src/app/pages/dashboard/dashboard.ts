import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  cards: any[] = [];
  loading = true;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getDashboardData().subscribe({
      next: (data) => {
        this.cards = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error cargando dashboard:', err);
        this.loading = false;
      }
    });
  }
}


