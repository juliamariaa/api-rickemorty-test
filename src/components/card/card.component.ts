import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { ContentInfoComponent } from '../content-info/content-info.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ContentInfoComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges {
  @Input() searchTerm: string = '';
  characters: any[] = [];
  filteredCharacters: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm']) {
      this.fetchCharacters(); 
    }
  }

  fetchCharacters(): void {
    this.apiService.getCharacters().subscribe(
      (response: { results: any[] }) => {
        this.characters = response.results;
        this.filterCharacters(); 
      },
      error => {
        console.error('Erro ao buscar personagens:', error);
      }
    );
  }

  filterCharacters(): void {
    if (this.searchTerm) {
      this.filteredCharacters = this.characters.filter(character =>
        character.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredCharacters = this.characters;
    }
  }
}
