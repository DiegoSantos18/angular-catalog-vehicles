import { Component, output } from '@angular/core';
import { VFilter } from '../../../../../shared/models/v-filter/v-filter';
import { VFilterComponent } from '../../../../../shared/components/v-filter/v-filter';

@Component({
  selector: 'v-catalog-filter',
  imports: [VFilterComponent],
  templateUrl: './v-catalog-filter.html',
  styleUrl: './v-catalog-filter.scss'
})
export class VCatalogFilterComponent {
  catalogFilterChanged = output<VFilter['result']>();

  catalogSchema: VFilter['schema'] = {
    showSearch: true,
    searchLabel: 'Buscar veículo por modelo ou marca...',
    ranges: [
      { key: 'price', labelMin: 'Preço Mínimo (R$)', labelMax: 'Preço Máximo (R$)' },
      { key: 'year', labelMin: 'Ano Mínimo', labelMax: 'Ano Máximo' }
    ],
    multiSelects: [
      {
        key: 'brands',
        title: 'Fabricantes',
        options: ['Audi', 'BMW', 'BYD', 'Chevrolet', 'Ford', 'Hyundai', 'Polestar', 'Porsche', 'Tesla', 'Volvo']
      },
      {
        key: 'conditions',
        title: 'Estado / Classificação',
        options: ['Boa Oferta', 'Certificado', 'Novo na Loja', 'Ótima Oferta']
      }
    ]
  };

  onFilterChanged(result: VFilter['result']): void {
    this.catalogFilterChanged.emit(result);
  }
}
