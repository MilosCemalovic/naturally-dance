import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/features/home/home').then(m => m.Home)
  },
  {
    path: 'about',
    loadChildren: () => import('./core/routes/about.route').then(m => m.ABOUT_ROUTE)
  },
  {
    path: 'projects',
    loadChildren: () => import('./core/routes/projects.route').then(m => m.PROJECTS_ROUTE)
  },
  {
    path: '**',
    redirectTo: ''
  }
]
