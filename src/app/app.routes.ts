import { Routes } from '@angular/router';

// Components
import { HomeComponent } from '../components/pages/home/home.component';
import { FavoritesComponent } from '../components/pages/favorites/favorites.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'favorites', 
    component: FavoritesComponent,
  },
  {
    path: '**', 
    redirectTo: '',
  },
];

