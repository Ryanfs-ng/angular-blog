import { Routes } from '@angular/router';
import { Content } from './pages/content/content';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch : 'full'
  },
  {
    path:'home',
    component:Home
  },
  {
    path:'content/:id',
    component:Content
  }
];
