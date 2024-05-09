import { Component, Input, inject } from '@angular/core';
import { DotcmsContextService } from '../../services/dotcms-context.service';
import { RowComponent } from '../row/row.component';

@Component({
  selector: 'app-dotcms-layout',
  standalone: true,
  imports: [RowComponent],
  templateUrl: './dotcms-layout.component.html',
  styleUrl: './dotcms-layout.component.scss',
})
export class DotcmsLayoutComponent {
  //TODO: Typeee
  // @Input({ required: true }) config: any;
  @Input({ required: true }) entity: any; //TODO: Look for better name



}
