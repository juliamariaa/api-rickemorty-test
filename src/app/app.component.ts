import { Component } from '@angular/core';

// Routes
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

// Components
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HeaderComponent } from '../components/header/header.component';
import { ContentInfoComponent } from '../components/content-info/content-info.component';
import { CardComponent } from '../components/card/card.component';
import { HomeComponent } from '../components/pages/home/home.component';
import { FavoritesComponent } from '../components/pages/favorites/favorites.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, 
    NavbarComponent, HeaderComponent, ContentInfoComponent, 
    CardComponent, HomeComponent, FavoritesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-rickmorty-test';

  searchTerm: string = '';

  onSearch(term: string): void {
    this.searchTerm = term;
  }
}

