import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VCard } from './v-card';

describe('VCard', () => {
  let component: VCard;
  let fixture: ComponentFixture<VCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VCard],
    }).compileComponents();

    fixture = TestBed.createComponent(VCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
