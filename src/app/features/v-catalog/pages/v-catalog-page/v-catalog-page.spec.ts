import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { VCatalogPage } from './v-catalog-page';

describe('VCatalogPage', () => {
  let component: VCatalogPage;
  let fixture: ComponentFixture<VCatalogPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VCatalogPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(VCatalogPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
