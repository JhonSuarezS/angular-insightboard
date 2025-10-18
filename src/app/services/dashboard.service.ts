import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getDashboardData() {
    return this.http.get<any[]>(`${this.baseUrl}/users`).pipe(
      map(users => {
        // Transformamos los datos de JSONPlaceholder en nuestro formato de "tarjetas"
        return [
          {
            title: 'Usuarios registrados',
            value: users.length,
            icon: '👥',
            color: '#007bff'
          },
          {
            title: 'Primer usuario',
            value: users[0]?.name || 'Desconocido',
            icon: '🧑',
            color: '#28a745'
          },
          {
            title: 'Correo del primer usuario',
            value: users[0]?.email || 'N/A',
            icon: '📧',
            color: '#ffc107'
          },
          {
            title: 'Ciudad del primero',
            value: users[0]?.address?.city || 'N/A',
            icon: '🏙️',
            color: '#dc3545'
          }
        ];
      })
    );
  }
}
