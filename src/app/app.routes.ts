import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home',
    loadComponent: () => import('./pages/home/home').then(m =>m.Home),
  },
  {path: 'about',
    loadComponent: () => import('./pages/about/about').then(m =>m.About),
  },
  {path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m =>m.Contact),
  },
  {path: 'interpolation',
    loadComponent: () => import('./pages/text-interpolation-exercice/text-interpolation-exercice').then(m =>m.TextInterpolationExercice),
  },
  // gestion de pages non trouver afficher ceette page a la place
  {path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then(m =>m.NotFound),
  },
];
