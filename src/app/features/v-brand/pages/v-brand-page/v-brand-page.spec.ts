import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VBrandPage } from './v-brand-page';

describe('VBrandPage', () => {
  let component: VBrandPage;
  let fixture: ComponentFixture<VBrandPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VBrandPage],
    }).compileComponents();

    fixture = TestBed.createComponent(VBrandPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
