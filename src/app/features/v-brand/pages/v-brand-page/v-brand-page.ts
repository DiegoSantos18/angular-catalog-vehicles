import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { VAsidePanel } from '../../../../shared/components/v-aside-panel/v-aside-panel';
import { VBrandCard } from '../../components/v-brand-card/v-brand-card';
import { VGobalSearch } from '../../../../core/services/v-global-search/v-gobal-search';
import { VBrandBaseApi } from '../../../../core/services/v-catalog/interface/v-brand/v-brand-base-api';
import { VBrandFilterComponent } from '../../components/v-brand-filter/v-brand-filter/v-brand-filter';
import { VFilter } from '../../../../shared/models/v-filter/v-filter';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { VBrand } from '../../../../core/models/v-brand/v-brand';
import { VModal } from '../../../../shared/components/v-modal/v-modal';

@Component({
  selector: 'v-brand-page',
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    VAsidePanel,
    VBrandFilterComponent,
    VBrandCard
  ],
  styleUrl: './v-brand-page.scss',
  templateUrl: './v-brand-page.html',
})
export class VBrandPage implements OnInit {
  private vBrandApi = inject(VBrandBaseApi);
  globalSearch = inject(VGobalSearch);
  private dialog = inject(MatDialog);

  allItens = signal<VBrand[]>([]);
  isLoading = signal<boolean>(true);

  currentFilters = signal<VFilter['result']>({
    search: '',
    ranges: {},
    multiSelects: {
      brands: [],
      conditions: []
    }
  });

  currentPage = signal<number>(1);
  pageSize = signal<number>(6);

  constructor() {
    effect(() => {
      const globalQuery = this.globalSearch.globalSearchQuery();
      this.currentFilters.update((filters: any) => ({
        ...filters,
        search: globalQuery
      }));
      this.currentPage.set(1);
    });
  }

  ngOnInit(): void {
    this.loadBrandData();
  }

  loadBrandData(): void {
    this.isLoading.set(true);

    this.vBrandApi.getVBrand().subscribe({
      next: (data) => {
        const sortedData = data.sort((a, b) =>
          (a.name || '').localeCompare(b.name || '', 'pt-BR', { sensitivity: 'accent' })
        );
        this.allItens.set(sortedData);
      },
      error: (err) => {
        console.error('Erro ao buscar a marca:', err);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }

  openDetails(item: VBrand): void {
    this.dialog.open(VModal, {
      width: '550px',
      data: {
        title: item.name,
        message: item.description
      }
    });
  }

  filteredItens = computed(() => {
    const filters = this.currentFilters();
    const items = this.allItens();

    return items.filter(item => {
      if (filters.search) {
        const query = filters.search.toLowerCase();
        const matchName = item.name?.toLowerCase().includes(query);
        const matchDescription = item.description?.toLowerCase().includes(query);
        if (!matchName && !matchDescription) return false;
      }

      const selectedBrands = filters.multiSelects?.['brands'] || [];
      if (selectedBrands.length > 0) {
        const matchBrand = selectedBrands.some(b => item.description?.toLowerCase().includes(b.toLowerCase()));
        if (!matchBrand) return false;
      }

      return true;
    });
  });

  totalPages = computed(() => {
    const total = this.filteredItens().length;
    return Math.ceil(total / this.pageSize()) || 1;
  });

  paginatedItens = computed(() => {
    const items = this.filteredItens();
    const page = this.currentPage();
    const size = this.pageSize();
    const startIndex = (page - 1) * size;
    return items.slice(startIndex, startIndex + size);
  });

  onFilterChanged(filters: VFilter['result']) {
    this.currentFilters.set(filters);
    this.currentPage.set(1);

    if (!filters.search) {
      this.globalSearch.setQuery('');
    }
  }

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((p: number) => p + 1);
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update((p: number) => p - 1);
    }
  }
}
