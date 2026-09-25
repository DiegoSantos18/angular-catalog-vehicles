import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'v-catalog-card',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './v-catalog-card.html',
  styleUrl: './v-catalog-card.scss'
})
export class VCatalogCard {
  item = input.required<any>();
  viewDetails = output<any>();

  onViewDetails() {
    this.viewDetails.emit(this.item());
  }
}
