import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-component',
  standalone: true,
  imports: [],
  templateUrl: './no-component.component.html',
  styleUrl: './no-component.component.scss',
})
export class NoComponentComponent {
  @Input() contentlet: any;
}
