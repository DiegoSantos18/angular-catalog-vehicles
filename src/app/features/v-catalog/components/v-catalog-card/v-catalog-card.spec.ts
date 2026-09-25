import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VCatalogCard } from './v-catalog-card';

describe('VCatalogCard', () => {
  let component: VCatalogCard;
  let fixture: ComponentFixture<VCatalogCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VCatalogCard],
    }).compileComponents();

    fixture = TestBed.createComponent(VCatalogCard);
    component = fixture.componentInstance;

    // Fornece o input obrigatório 'item' exigido pelo componente
    fixture.componentRef.setInput('item', {
      id: '1',
      name: 'Model S',
      brand: 'Tesla',
      price: 500000,
      image: ''
    });

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
