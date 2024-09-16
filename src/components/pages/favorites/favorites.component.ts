import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { ContentInfoComponent } from '../../content-info/content-info.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [HeaderComponent, ContentInfoComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
 
}
