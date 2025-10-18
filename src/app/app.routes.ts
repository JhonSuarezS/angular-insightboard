import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Reports } from './pages/reports/reports';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'reports', component: Reports },
      { path: 'settings', component: Settings },
    ],
  },
];


