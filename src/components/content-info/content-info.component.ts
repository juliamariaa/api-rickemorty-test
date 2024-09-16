import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-info',
  standalone: true,
  templateUrl: './content-info.component.html',
  styleUrls: ['./content-info.component.css']
})
export class ContentInfoComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() showButton: boolean = false;
}
