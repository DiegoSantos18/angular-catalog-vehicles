import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VCatalogFilter } from './v-catalog-filter';

describe('VCatalogFilter', () => {
  let component: VCatalogFilter;
  let fixture: ComponentFixture<VCatalogFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VCatalogFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(VCatalogFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
