import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VAboutPage } from './v-about-page';

describe('VAboutPage', () => {
  let component: VAboutPage;
  let fixture: ComponentFixture<VAboutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VAboutPage],
    }).compileComponents();

    fixture = TestBed.createComponent(VAboutPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
