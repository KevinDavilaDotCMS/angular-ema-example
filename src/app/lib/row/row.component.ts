import { Component, Input, inject } from '@angular/core';
import { combineClasses } from '../../../utils/editor.utils';
import { DotcmsContextService } from '../../services/dotcms-context.service';
import { dotcmsClient } from '@dotcms/client';
import { ColumnComponent } from "../column/column.component";

@Component({
    selector: 'app-row',
    standalone: true,
    templateUrl: './row.component.html',
    styleUrl: './row.component.scss',
    imports: [ColumnComponent]
})
export class RowComponent {
  @Input() row!: any;

  private readonly dotcmsContext = inject(DotcmsContextService);

  isInsideEditor = this.dotcmsContext.getContextData.isInsideEditor;

  // const combinedClasses = combineClasses([styles.row, row.styleClass]);

  // return (
  //     <div {...rowProps} className={combinedClasses}>
  //         {row.columns.map((column, index) => (
  //             <Column key={index} column={column} />
  //         ))}
  //     </div>
  // );
}
