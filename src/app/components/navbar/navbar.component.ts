import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input() items!: any[];
  queryParams: URLSearchParams = new URLSearchParams(window.location.search);

  constructor(private router: Router) {}

  navigateTo(item: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: this.queryParams.toString() ? this.queryParams : undefined,
    };

    this.router.navigate([item.href], navigationExtras);
  }
}
