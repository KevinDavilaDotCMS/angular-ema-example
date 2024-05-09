import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DotcmsContextService } from './services/dotcms-context.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule, NgIf } from '@angular/common';
import { COMPONENTS } from '../utils/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-ema-example';

  dotcmsContext = inject(DotcmsContextService);

  private router = inject(Router);
  ngOnInit() {
    this.dotcmsContext.init();
  }

  navigateNow(){
    this.router.navigateByUrl('/index?language_id=1&com.dotmarketing.persona.id=m…ona.no.persona&variantName=DEFAULT&mode=EDIT_MODE')
  }

  // this.dotcmsClient.clientII.
}
