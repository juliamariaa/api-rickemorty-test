import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() headerTitle: string = ''; 
  @Input() showSearch: boolean = false;   
  @Output() search = new EventEmitter<string>(); 

  handleSearchInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement) {
      this.search.emit(inputElement.value);
    }
  }
}
