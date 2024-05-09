import { Component, HostBinding, Input, inject } from '@angular/core';
import { DotcmsContextService } from '../../services/dotcms-context.service';
import { getPositionStyleClasses } from '../../../utils/editor.utils';
import { ContainerComponent } from "../container/container.component";

@Component({
    selector: 'app-column',
    standalone: true,
    templateUrl: './column.component.html',
    styleUrl: './column.component.scss',
    imports: [ContainerComponent]
})
export class ColumnComponent {
  @Input({ required: true }) column!: any;
  @HostBinding('class') class = ''
  private readonly dotcmsContext = inject(DotcmsContextService);

  isInsideEditor = this.dotcmsContext.getContextData.isInsideEditor;

  classes = { startClass: '', endClass: '' };

  ngOnInit() {
    this.classes = getPositionStyleClasses(
      this.column.leftOffset,
      this.column.width + this.column.leftOffset,
    );

    this.class = `${this.classes.startClass} ${this.classes.endClass}`;
  }
}
