import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VBrand } from '../../../../core/models/v-brand/v-brand';

@Component({
  selector: 'v-brand-card',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './v-brand-card.html',
  styleUrl: './v-brand-card.scss'
})
export class VBrandCard {
  item = input.required<VBrand>();
  viewDetails = output<VBrand>()
  isFavorite = signal<boolean>(false);

  toggleFavorite(event: Event): void {
    event.stopPropagation();
    this.isFavorite.update(current => !current);
  }

  onViewDetails() {
    this.viewDetails.emit(this.item());
  }
}
