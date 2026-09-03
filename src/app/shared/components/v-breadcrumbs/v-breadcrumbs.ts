import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, Subscription } from 'rxjs';

export interface BreadcrumbItem {
  readonly label: string;
  readonly route: string;
}

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'v-breadcrumbs',
  styleUrl: './v-breadcrumbs.scss',
  templateUrl: './v-breadcrumbs.html',
})
export class VBreadcrumbs implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private routerSubscription?: Subscription;
  items = signal<readonly BreadcrumbItem[]>([]);

  ngOnInit() {
    this.updateItems();
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.updateItems());
  }

  ngOnDestroy() {
    this.routerSubscription?.unsubscribe();
  }

  private updateItems() {
    const items: BreadcrumbItem[] = [{ label: 'Home', route: '/' }];
    let route = this.activatedRoute.root;
    let routePath = '';

    while (route.firstChild) {
      route = route.firstChild;
      const segment = route.snapshot.url.map(value => value.path).join('/');
      if (segment) {
        routePath += `/${segment}`;
      }
      const label = route.snapshot.data['breadcrumb'] as string | undefined;
      if (label && (routePath || route.snapshot.routeConfig?.path === '')) {
        items.push({ label, route: routePath || '/' });
      }
    }

    this.items.set(items);
  }
}
