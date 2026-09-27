import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VBrandFilterComponent } from './v-brand-filter';

describe('VBrandFilter', () => {
  let component: VBrandFilterComponent;
  let fixture: ComponentFixture<VBrandFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VBrandFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VBrandFilterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
