import { Component, inject } from '@angular/core';
import { DotcmsLayoutComponent } from "../../lib/dotcms-layout/dotcms-layout.component";
import { DotcmsContextService } from '../../services/dotcms-context.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [DotcmsLayoutComponent]
})
export class HomeComponent {
    dotcmsContext = inject(DotcmsContextService);
}
