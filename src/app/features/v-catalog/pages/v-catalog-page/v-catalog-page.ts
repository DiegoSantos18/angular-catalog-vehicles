import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VAsidePanel } from '../../../../shared/components/v-aside-panel/v-aside-panel';
import { VFilter } from '../../components/v-filter/v-filter';
import { VCatalogCard } from '../../components/v-catalog-card/v-catalog-card';

@Component({
  selector: 'v-catalog-page',
  standalone: true,
  imports: [
    CommonModule,
    VAsidePanel,
    VFilter,
    VCatalogCard
  ],
  styleUrl: './v-catalog-page.scss',
  templateUrl: './v-catalog-page.html',
})
export class VCatalogPage {
  allItens = signal([
    {
      id: 1,
      title: 'Polestar 2 Pilot Plus AWD 2020',
      subtitle: '54.900 km · Caxias do Sul, RS',
      price: 139900,
      monthlyEst: 2450,
      range: 375,
      battery: 78,
      acceleration: 4.5,
      badge: 'Ótima Oferta',
      brandIcon: 'polestar',
      location: 'Centro',
      imageUrl: 'https://cdn.motor1.com/images/mgl/kpWNN/s1/2021-polestar-2-exterior.jpg'
    },
    {
      id: 2,
      title: 'Hyundai IONIQ 5 SEL AWD 2022',
      subtitle: '35.000 km · Caxias do Sul, RS',
      price: 159900,
      monthlyEst: 2790,
      range: 412,
      battery: 77,
      acceleration: 5.1,
      badge: 'Ótima Oferta',
      brandIcon: 'hyundai',
      location: 'Exposição',
      imageUrl: 'https://cdn.motor1.com/images/mgl/XxBp6/s1/2022-hyundai-ioniq-5.jpg'
    },
    {
      id: 3,
      title: 'Tesla Model 3 Long Range 2024',
      subtitle: '19.900 km · Caxias do Sul, RS',
      price: 199900,
      monthlyEst: 3490,
      range: 548,
      battery: 79,
      acceleration: 4.2,
      badge: 'Boa Oferta',
      brandIcon: 'tesla',
      location: 'Lourdes',
      imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Porsche Taycan 4S Performance 2023',
      subtitle: '24.300 km · Caxias do Sul, RS',
      price: 489900,
      monthlyEst: 8550,
      range: 365,
      battery: 89,
      acceleration: 3.8,
      badge: 'Certificado',
      brandIcon: 'porsche',
      location: 'Rio Branco',
      imageUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Audi Q4 e-tron Premium Plus 2023',
      subtitle: '29.700 km · Caxias do Sul, RS',
      price: 249900,
      monthlyEst: 4360,
      range: 426,
      battery: 82,
      acceleration: 5.8,
      badge: 'Ótima Oferta',
      brandIcon: 'audi',
      location: 'Exposição',
      imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Ford Mustang Mach-E Premium 2022',
      subtitle: '47.300 km · Caxias do Sul, RS',
      price: 189900,
      monthlyEst: 3310,
      range: 466,
      battery: 88,
      acceleration: 4.8,
      badge: 'Boa Oferta',
      brandIcon: 'ford',
      location: 'Centro',
      imageUrl: 'https://www.edmunds.com/assets/m/ford/mustang-mach-e/2021/oem/2021_ford_mustang-mach-e_4dr-hatchback_gt_fq_oem_1_600.jpg'
    },
    {
      id: 7,
      title: 'BYD Seal Excellence AWD 2024',
      subtitle: '6.600 km · Caxias do Sul, RS',
      price: 229900,
      monthlyEst: 4010,
      range: 515,
      battery: 82,
      acceleration: 3.8,
      badge: 'Novo na Loja',
      brandIcon: 'byd',
      location: 'Lourdes',
      imageUrl: 'https://cdn.motor1.com/images/mgl/2NZ8Bg/s3/byd-seal.jpg'
    },
    {
      id: 8,
      title: 'Volvo XC40 Recharge Ultimate 2023',
      subtitle: '31.200 km · Caxias do Sul, RS',
      price: 269900,
      monthlyEst: 4710,
      range: 418,
      battery: 78,
      acceleration: 4.8,
      badge: 'Certificado',
      brandIcon: 'volvo',
      location: 'Rio Branco',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeB-hb_y8k51t39BXisIXVEfHIIZqYMKVb1BcgwKElI1O-JfdmIRIakA&s=10'
    },
    {
      id: 9,
      title: 'BMW i4 M50 Gran Coupé 2023',
      subtitle: '15.400 km · Caxias do Sul, RS',
      price: 419900,
      monthlyEst: 7330,
      range: 484,
      battery: 83,
      acceleration: 3.9,
      badge: 'Ótima Oferta',
      brandIcon: 'bmw',
      location: 'Centro',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2022-bmw-i4-m50-101-1657136321.jpeg?crop=0.881xw:0.743xh;0.0651xw,0.198xh&resize=1200:*'
    },
    {
      id: 10,
      title: 'Chevrolet Blazer EV RS 2024',
      subtitle: '8.200 km · Caxias do Sul, RS',
      price: 349900,
      monthlyEst: 6110,
      range: 520,
      battery: 85,
      acceleration: 5.3,
      badge: 'Novo na Loja',
      brandIcon: 'chevrolet',
      location: 'Exposição',
      imageUrl: 'https://blog.usezapay.com.br/wp-content/uploads/2023/09/Blazer-chevrolet.jpg'
    }
  ]);

  currentFilters = signal<any>({
    search: '',
    minPrice: null,
    maxPrice: null,
    brands: [],
    conditions: []
  });

  filteredItens = computed(() => {
    const filters = this.currentFilters();
    const items = this.allItens();

    return items.filter(item => {
      if (filters.search) {
        const query = filters.search.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(query);
        const matchLocation = item.location.toLowerCase().includes(query);
        if (!matchTitle && !matchLocation) return false;
      }

      if (filters.minPrice !== null && filters.minPrice !== '' && item.price < Number(filters.minPrice)) {
        return false;
      }

      if (filters.maxPrice !== null && filters.maxPrice !== '' && item.price > Number(filters.maxPrice)) {
        return false;
      }

      if (filters.brands && filters.brands.length > 0) {
        const matchBrand = filters.brands.some((b: string) =>
          item.title.toLowerCase().includes(b.toLowerCase())
        );
        if (!matchBrand) return false;
      }

      if (filters.conditions && filters.conditions.length > 0) {
        if (!filters.conditions.includes(item.badge)) {
          return false;
        }
      }

      return true;
    });
  });

  onFilterChanged(filters: any) {
    this.currentFilters.set(filters);
  }
}
