import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  @Input() contentlet: any;

  ngOnInit(){
    console.log(this.contentlet);
  }
}
