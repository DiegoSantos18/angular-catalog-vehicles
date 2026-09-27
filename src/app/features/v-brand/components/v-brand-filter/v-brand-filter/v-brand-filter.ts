import { Component, output } from '@angular/core';
import { VFilter } from '../../../../../shared/models/v-filter/v-filter';
import { VFilterComponent } from '../../../../../shared/components/v-filter/v-filter';

@Component({
  selector: 'v-brand-filter',
  imports: [VFilterComponent],
  templateUrl: './v-brand-filter.html',
  styleUrl: './v-brand-filter.scss'
})
export class VBrandFilterComponent {
  brandFilterChanged = output<VFilter['result']>();

  brandSchema: VFilter['schema'] = {
    showSearch: true,
    searchLabel: 'Buscar marca por nome ou descrição...',
    multiSelects: [
      {
        key: 'brands',
        title: 'Fabricantes',
        options: ['Audi', 'BMW', 'BYD', 'Chevrolet', 'Ford', 'Hyundai', 'Polestar', 'Porsche', 'Tesla', 'Volvo']
      }
    ]
  };

  onFilterChanged(result: VFilter['result']): void {
    this.brandFilterChanged.emit(result);
  }
}
