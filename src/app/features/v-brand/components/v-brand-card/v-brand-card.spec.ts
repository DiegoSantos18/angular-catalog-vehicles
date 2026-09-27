import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VBrandCard } from './v-brand-card';

describe('VBrandCard', () => {
  let component: VBrandCard;
  let fixture: ComponentFixture<VBrandCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VBrandCard],
    }).compileComponents();

    fixture = TestBed.createComponent(VBrandCard);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('item', {
      id: '1',
      name: 'Tesla',
      description: 'Tesla',
      image: ''
    });

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
