import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VContactPage } from './v-contact-page';

describe('VContactPage', () => {
  let component: VContactPage;
  let fixture: ComponentFixture<VContactPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VContactPage],
    }).compileComponents();

    fixture = TestBed.createComponent(VContactPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
