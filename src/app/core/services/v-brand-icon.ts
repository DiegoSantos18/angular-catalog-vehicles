import { Injectable, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class VBrandIcon {
  private matIconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

  private readonly brands = [
    'audi', 'bmw', 'byd', 'chevrolet', 'ford',
    'hyundai', 'polestar', 'porsche', 'tesla', 'volvo'
  ];

  public registerIcons(): void {
    this.brands.forEach(brand => {
      this.matIconRegistry.addSvgIcon(
        brand,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`icons/v-brand-logos/${brand}.svg`)
      );
    });
  }
}
