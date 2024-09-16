import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { CardComponent } from '../../card/card.component';
import { ContentInfoComponent } from '../../content-info/content-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CardComponent, ContentInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  searchTerm: string = '';

  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }
}
